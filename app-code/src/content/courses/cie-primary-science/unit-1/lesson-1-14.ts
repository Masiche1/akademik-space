import type { Lesson } from "../../../types.ts";

export const lesson114: Lesson = {
  id: "cips-u1-lesson-1-14",
  code: "1-14",
  title: "Stage 2 — Forces, Light and the Sun",
  goal: "I CAN describe pushes and pulls as forces, identify light sources and explain the Sun's apparent movement.",
  standards: ["Cambridge Primary Science 0097 Stage 2: physics and Earth",
  "Cambridge Primary Science 0097 framework substrands: 2Pf, 2Ps, 2ESp, 2ESs"],
  stage: 2,
  vocabulary: [
    { term: "Force", definition: "A push or pull that can change an object's movement or shape." },
    { term: "Push", definition: "A force moving something away." },
    { term: "Pull", definition: "A force moving something towards." },
    { term: "Light source", definition: "Something that makes its own light — Sun, lamp, fire." },
    { term: "Apparent movement", definition: "How something looks to move because of our viewpoint." },
    { term: "Rock", definition: "A hard material from the Earth — e.g. granite, limestone." },
  ],
  concepts: [
    {
      id: "cips-u1-s14-forces-light",
      title: "Forces, light sources and the Sun's movement",
      skill: "Identify forces, light sources and describe the Sun's apparent path at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Forces and light",
            body: "Forces are pushes and pulls — they can make things speed up, slow down, stop, change direction or change shape. Only a force can change motion. Light comes from sources: the Sun, lamps, candles, fires. Darkness is the absence of light. The Moon and mirrors reflect light but don't make their own.",
          },
          {
            heading: "Rocks and the Sun's path",
            body: "Rocks are hard Earth materials — granite, limestone, sandstone — extracted from quarries, mines and riverbeds. The Sun appears to move across the sky during the day: rises in the east, sets in the west. This is apparent movement — actually Earth's rotation makes it look this way.",
          },
        ],
        keyFormulas: [
          { name: "Force", statement: "push or pull; changes movement or shape" },
          { name: "Light source", statement: "makes own light (Sun, lamp, fire)" },
          { name: "Sun path", statement: "appears to rise east, set west" },
        ],
        workedExample: {
          problem: "A toy car stops rolling. What must have happened? Is the Moon a light source?",
          solution: "A force must have acted — friction or someone stopped it. Only forces change motion. The Moon is NOT a light source — it reflects sunlight.",
        },
      },
      questions: [
        {
          id: "cips-u1-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a light source?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The Sun" }, { id: "b", text: "The Moon" }, { id: "c", text: "A mirror" }, { id: "d", text: "A window" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light source", statement: "Makes own light." }],
            steps: [{ reasoning: "Only the Sun makes its own light; others reflect.", marks: 1, markCode: "M" }],
            finalAnswer: "The Sun",
          },
        },
        {
          id: "cips-u1-fl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two forces you use every day.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Forces", statement: "Pushes and pulls." }],
            steps: [
              { reasoning: "e.g. pushing a door open.", marks: 1, markCode: "M" },
              { reasoning: "e.g. pulling a drawer / kicking a ball.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. push door, pull drawer",
          },
        },
        {
          id: "cips-u1-fl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ball is rolling and then stops. Explain what caused it to stop using the idea of forces. Then describe where the Sun appears at sunrise and sunset.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Forces and apparent movement", statement: "Force needed to change motion." }],
            steps: [
              { reasoning: "A force (friction/ground) acted to slow and stop it.", marks: 1, markCode: "M" },
              { reasoning: "Only a force changes motion.", marks: 1, markCode: "M" },
              { reasoning: "Sun rises in east, sets in west (apparent).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friction force stopped it; Sun rises east, sets west",
          },
        },
        {
          id: "cips-u1-fl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Give three examples of pushes and three of pulls you have experienced. (b) A book slides across a table and stops — what force stopped it? (c) Which of these are light sources: torch, moon, candle, mirror? (d) Describe the Sun's apparent movement during one day. (e) Why is it 'apparent' and not real movement? (f) Name two types of rock and where rocks are extracted from.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Physics and Earth skills", statement: "Forces, light, Sun's path, rocks." }],
            steps: [
              { reasoning: "(a) Three pushes + three pulls valid.", marks: 1, markCode: "M" },
              { reasoning: "(b) Friction between book and table.", marks: 1, markCode: "M" },
              { reasoning: "(c) Torch and candle are sources; moon and mirror reflect.", marks: 1, markCode: "M" },
              { reasoning: "(d) Rises east → arcs across sky → sets west.", marks: 1, markCode: "M" },
              { reasoning: "(e) Earth's rotation makes Sun appear to move.", marks: 1, markCode: "M" },
              { reasoning: "(f) e.g. granite/limestone; quarries, mines, riverbeds.", marks: 1, markCode: "M" },
              { reasoning: "Reasoning uses force/light concepts correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pushes/pulls, friction, sources vs reflectors, Sun's path, Earth rotates, rock types/sources.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-fl-notes",
      title: "Forces, light, Sun — notes",
      summary: "Forces = pushes/pulls changing motion or shape. Light sources make own light. Sun appears to rise east, set west — Earth's rotation.",
      sections: [
        { heading: "Forces", body: "Only a force can change an object's movement or shape." },
        { heading: "Light and Sun", body: "Sources make light; Moon/mirror reflect. Sun's path is apparent — Earth rotates." },
      ],
    },
  ],
};
