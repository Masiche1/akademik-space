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
            { id: "a", text: "The Moon" },
            { id: "b", text: "The Sun" },
            { id: "c", text: "A mirror" },
            { id: "d", text: "A window" },
          ], correctChoiceId: "b" },
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
        {
          id: "cips-u1-fl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT a light source?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fire" },
            { id: "b", text: "A torch" },
            { id: "c", text: "A candle" },
            { id: "d", text: "The Moon" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light source", statement: "Makes its own light." }],
            steps: [{ reasoning: "The Moon reflects sunlight — it is not a source.", marks: 1, markCode: "A" }],
            finalAnswer: "The Moon",
          },
        },
        {
          id: "cips-u1-fl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A force can make an object change direction. Which action uses a force to change direction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A lamp glowing" },
            { id: "b", text: "Kicking a ball to curve" },
            { id: "c", text: "A book sitting on a table" },
            { id: "d", text: "A shadow forming" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Force", statement: "Push or pull that changes movement or shape." }],
            steps: [{ reasoning: "Kicking applies a force that changes the ball's direction.", marks: 1, markCode: "A" }],
            finalAnswer: "Kicking a ball to curve",
          },
        },
        {
          id: "cips-u1-fl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Sun appears to rise in the east and set in the west. How many different compass directions does it appear in at these two times?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "directions" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Apparent movement", statement: "Sun appears to rise east, set west." }],
            steps: [{ reasoning: "East and west are 2 different directions.", marks: 1, markCode: "M" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-fl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 5 objects for light sources: torch, mirror, candle, moon, lamp. Three are true light sources. How many objects tested were NOT light sources?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "objects" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Light source", statement: "Makes own light; mirrors and moon only reflect." }],
            steps: [
              { reasoning: "Sources: torch, candle, lamp (3).", marks: 1, markCode: "M" },
              { reasoning: "Not sources: mirror, moon → 2 objects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-fl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Only a force can change what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The weather" },
            { id: "b", text: "A plant's smell" },
            { id: "c", text: "The colour of a wall" },
            { id: "d", text: "An object's movement or shape" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Force", statement: "Only a force changes motion or shape." }],
            steps: [{ reasoning: "A force is needed to change movement or shape.", marks: 1, markCode: "A" }],
            finalAnswer: "Movement or shape",
          },
        },
        {
          id: "cips-u1-fl-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things that are NOT light sources but can still look bright.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflected light", statement: "Moon and mirrors reflect light." }],
            steps: [
              { reasoning: "The Moon looks bright but reflects sunlight.", marks: 1, markCode: "M" },
              { reasoning: "A mirror looks bright by reflecting light too.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. the Moon and a mirror",
          },
        },
        {
          id: "cips-u1-fl-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A toy car is pushed and rolls, then slows and stops. Explain the forces involved and describe why the Sun's movement across the sky is called 'apparent'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Forces and apparent movement", statement: "Push starts motion; friction stops it; Earth's rotation causes apparent Sun movement." }],
            steps: [
              { reasoning: "The push applies a force that starts the car moving.", marks: 1, markCode: "M" },
              { reasoning: "Friction with the ground slows the car until it stops.", marks: 1, markCode: "M" },
              { reasoning: "Sun's movement is apparent because Earth rotates — the Sun doesn't really move across the sky.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Push starts, friction stops; Earth's rotation makes Sun's path apparent",
          },
        },
        {
          id: "cips-u1-fl-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which rock is typically extracted from a quarry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A sponge" },
            { id: "b", text: "Granite" },
            { id: "c", text: "A leaf" },
            { id: "d", text: "A feather" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rocks", statement: "Hard Earth materials extracted from quarries, mines, riverbeds." }],
            steps: [{ reasoning: "Granite is a hard rock extracted from quarries.", marks: 1, markCode: "A" }],
            finalAnswer: "Granite",
          },
        },
        {
          id: "cips-u1-fl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 6 objects to see which are light sources. 4 of them make their own light. What is the total number of objects that are NOT light sources?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "objects" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Identifying light sources", statement: "Count non-sources." }],
            steps: [
              { reasoning: "4 are light sources.", marks: 1, markCode: "M" },
              { reasoning: "$6 - 4 = 2$ are not light sources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-fl-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a bicycle slows down when you stop pedalling, using the idea of forces.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Forces", statement: "Friction and air resistance oppose motion." }],
            steps: [
              { reasoning: "When you stop pedalling no force pushes the bike forward.", marks: 1, markCode: "M" },
              { reasoning: "Friction between tyres and ground plus air resistance act against motion.", marks: 1, markCode: "M" },
              { reasoning: "These forces slow the bike until it stops.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friction and air resistance slow the bike to a stop",
          },
        },
        {
          id: "cips-u1-fl-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where does the Sun appear to set?",
          response: { type: "mcq", choices: [
            { id: "a", text: "East" },
            { id: "b", text: "South" },
            { id: "c", text: "West" },
            { id: "d", text: "North" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Apparent movement", statement: "Sun rises east, sets west." }],
            steps: [{ reasoning: "The Sun appears to set in the west.", marks: 1, markCode: "A" }],
            finalAnswer: "West",
          },
        },
        {
          id: "cips-u1-fl-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Give three examples of pushes and three of pulls. (b) A book slides and stops — which force stopped it? (c) Sort these into light sources and non-sources: torch, moon, candle, mirror, fire, window. (d) Describe the Sun's apparent path during a day. (e) Why is it 'apparent' movement? (f) Name two types of rock and two places rocks are extracted from. (g) Explain what darkness is. (h) Give one example of a force changing an object's shape.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Forces, light, Sun, rocks", statement: "Integrated Stage 2 physics and Earth answer." }],
            steps: [
              { reasoning: "(a) Three pushes + three pulls valid.", marks: 1, markCode: "M" },
              { reasoning: "(b) Friction between book and table.", marks: 1, markCode: "M" },
              { reasoning: "(c) Sources: torch, candle, fire; non-sources: moon, mirror, window.", marks: 1, markCode: "M" },
              { reasoning: "(d) Rises east → arcs across sky → sets west.", marks: 1, markCode: "M" },
              { reasoning: "(e) Earth rotates, making the Sun appear to move.", marks: 1, markCode: "M" },
              { reasoning: "(f) e.g. granite, limestone; quarries, mines, riverbeds.", marks: 1, markCode: "M" },
              { reasoning: "(g) Darkness is the absence of light.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. squashing a ball, bending a ruler — force changes shape.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pushes/pulls, friction, light sources, Sun's path, Earth's rotation, rocks, darkness, force changes shape.",
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
