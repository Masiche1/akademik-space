import type { Lesson } from "../../../types.ts";

export const lesson116: Lesson = {
  id: "cips-u1-lesson-1-16",
  code: "1-16",
  title: "Stage 3 — Earth: Rocks, Cycles and Space",
  goal: "I CAN describe Earth's water cycle and rock types, and describe the Sun, Moon and planets in the Solar System.",
  standards: ["Cambridge Primary Science 0097 Stage 3: Earth and space",
  "Cambridge Primary Science 0097 framework substrands: 3ESp, 3ESs"],
  stage: 3,
  vocabulary: [
    { term: "Water cycle", definition: "The continuous movement of water: evaporation, condensation, precipitation." },
    { term: "Evaporation", definition: "Water turning into vapour and rising into the air." },
    { term: "Condensation", definition: "Water vapour cooling into droplets forming clouds." },
    { term: "Precipitation", definition: "Water falling as rain, snow or hail." },
    { term: "Solar System", definition: "The Sun and all the planets, moons and other objects orbiting it." },
    { term: "Orbit", definition: "The path an object follows around another in space." },
  ],
  concepts: [
    {
      id: "cips-u1-s16-earth",
      title: "The water cycle and the Solar System",
      skill: "Describe the water cycle stages and the basic structure of the Solar System at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "The water cycle",
            body: "Water constantly moves: the Sun heats water in oceans, lakes and rivers → evaporation turns it to vapour → vapour rises and cools → condensation forms clouds → precipitation falls as rain/snow → water flows back to seas. Plants also release water vapour (transpiration). The cycle never stops.",
          },
          {
            heading: "The Solar System",
            body: "The Sun is at the centre; eight planets orbit it: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Earth is the third planet. The Moon orbits Earth and reflects sunlight — it doesn't make its own light. Planets don't produce light; they reflect the Sun's.",
          },
        ],
        keyFormulas: [
          { name: "Water cycle", statement: "evaporation → condensation → precipitation → collection" },
          { name: "Solar System", statement: "Sun centre; 8 planets orbit; Moon orbits Earth" },
        ],
        workedExample: {
          problem: "Where does rain come from? Name the water cycle stage when clouds form.",
          solution: "Rain = precipitation — water vapour condensed into cloud droplets that grow heavy and fall. Clouds form during condensation.",
        },
      },
      questions: [
        {
          id: "cips-u1-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first stage of the water cycle called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Collection" },
            { id: "b", text: "Condensation" },
            { id: "c", text: "Evaporation" },
            { id: "d", text: "Precipitation" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Water cycle", statement: "Evaporation starts the cycle." }],
            steps: [{ reasoning: "Sun heats water → evaporation is first stage.", marks: 1, markCode: "M" }],
            finalAnswer: "Evaporation",
          },
        },
        {
          id: "cips-u1-es-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the planet we live on and what it orbits.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "Earth orbits the Sun." }],
            steps: [
              { reasoning: "We live on Earth.", marks: 1, markCode: "M" },
              { reasoning: "Earth orbits the Sun (3rd planet).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Earth; orbits the Sun",
          },
        },
        {
          id: "cips-u1-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between evaporation and condensation in the water cycle, and describe what the Moon does in space.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Water cycle and Moon", statement: "State changes vs orbiting body." }],
            steps: [
              { reasoning: "Evaporation: liquid→vapour rising; condensation: vapour→liquid droplets.", marks: 1, markCode: "M" },
              { reasoning: "Direction/temperature difference explained.", marks: 1, markCode: "M" },
              { reasoning: "Moon orbits Earth and reflects sunlight (not a light source).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evap=liquid→gas up; condensation=gas→liquid clouds; Moon orbits Earth, reflects light",
          },
        },
        {
          id: "cips-u1-es-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Describe the four main stages of the water cycle in order. (b) What drives the water cycle? (c) Name all eight planets in order from the Sun. (d) What is the Moon and what does it orbit? (e) Why can't we see the Moon during a new moon? (f) Explain why planets appear to shine.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Earth and space", statement: "Water cycle, planets, Moon, reflected light." }],
            steps: [
              { reasoning: "(a) Evaporation, condensation, precipitation, collection/runoff.", marks: 1, markCode: "M" },
              { reasoning: "(b) The Sun's energy drives it.", marks: 1, markCode: "M" },
              { reasoning: "(c) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", marks: 1, markCode: "M" },
              { reasoning: "(d) Earth's natural satellite; orbits Earth.", marks: 1, markCode: "M" },
              { reasoning: "(e) Moon between Earth and Sun — unlit side faces us.", marks: 1, markCode: "M" },
              { reasoning: "(f) They reflect sunlight; don't produce own light.", marks: 1, markCode: "M" },
              { reasoning: "Reasoning accurate for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cycle stages, Sun drives, 8 planets, Moon orbits Earth, new moon geometry, reflected light.",
          },
        },
        {
          id: "cips-u1-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When water vapour cools and turns into liquid droplets, what is this called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Collection" },
            { id: "b", text: "Precipitation" },
            { id: "c", text: "Evaporation" },
            { id: "d", text: "Condensation" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Condensation", statement: "Vapour cooling into droplets." }],
            steps: [{ reasoning: "Vapour → liquid droplets = condensation.", marks: 1, markCode: "M" }],
            finalAnswer: "Condensation",
          },
        },
        {
          id: "cips-u1-es-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which planet is closest to the Sun?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Earth" },
            { id: "b", text: "Mars" },
            { id: "c", text: "Venus" },
            { id: "d", text: "Mercury" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Planets", statement: "Mercury is first from the Sun." }],
            steps: [{ reasoning: "Mercury is the closest planet to the Sun.", marks: 1, markCode: "A" }],
            finalAnswer: "Mercury",
          },
        },
        {
          id: "cips-u1-es-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many planets orbit the Sun?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "planets" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "Eight planets orbit the Sun." }],
            steps: [{ reasoning: "There are 8 planets.", marks: 1, markCode: "M" }],
            finalAnswer: "8",
          },
        },
        {
          id: "cips-u1-es-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A model shows evaporation taking 3 hours and condensation taking 2 hours. What is the total time for both stages?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "hours" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Water cycle", statement: "Add stage times." }],
            steps: [
              { reasoning: "$3 + 2 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Total is 5 hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u1-es-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rain falling from clouds is which stage of the water cycle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Condensation" },
            { id: "b", text: "Precipitation" },
            { id: "c", text: "Evaporation" },
            { id: "d", text: "Transpiration" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Precipitation", statement: "Water falling as rain, snow or hail." }],
            steps: [{ reasoning: "Rain = precipitation.", marks: 1, markCode: "A" }],
            finalAnswer: "Precipitation",
          },
        },
        {
          id: "cips-u1-es-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways water gets back into the air during the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Water cycle", statement: "Evaporation and transpiration return water to air." }],
            steps: [
              { reasoning: "Evaporation from seas, lakes, rivers.", marks: 1, markCode: "M" },
              { reasoning: "Transpiration from plants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporation and transpiration",
          },
        },
        {
          id: "cips-u1-es-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the journey of a drop of water through the water cycle, starting from the sea.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Water cycle", statement: "Evaporation → condensation → precipitation → collection." }],
            steps: [
              { reasoning: "Sun heats sea → water evaporates as vapour.", marks: 1, markCode: "M" },
              { reasoning: "Vapour rises, cools → condensation forms clouds.", marks: 1, markCode: "M" },
              { reasoning: "Clouds produce precipitation; water flows back to the sea.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporate → condense → rain → back to sea",
          },
        },
        {
          id: "cips-u1-es-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which body does the Moon orbit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mars" },
            { id: "b", text: "Earth" },
            { id: "c", text: "The Sun" },
            { id: "d", text: "Jupiter" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Moon", statement: "The Moon orbits Earth." }],
            steps: [{ reasoning: "The Moon orbits Earth.", marks: 1, markCode: "A" }],
            finalAnswer: "Earth",
          },
        },
        {
          id: "cips-u1-es-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an orbit model, Mercury completes 4 orbits and Venus completes 7 orbits. What is the total number of orbits completed by both planets?",
          response: { type: "numeric", parts: [{ label: "a", answer: 11, unit: "orbits" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Orbits", statement: "Add orbit counts." }],
            steps: [
              { reasoning: "$4 + 7 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Total is 11 orbits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cips-u1-es-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the Moon appears to shine at night even though it is not a light source.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflected light", statement: "Moon reflects sunlight." }],
            steps: [
              { reasoning: "The Moon does not make its own light.", marks: 1, markCode: "M" },
              { reasoning: "Sunlight hits the Moon's surface and reflects toward Earth.", marks: 1, markCode: "M" },
              { reasoning: "We see the reflected light, so it appears to shine.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moon reflects sunlight toward Earth",
          },
        },
        {
          id: "cips-u1-es-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which planet do we live on?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Earth" },
            { id: "b", text: "Jupiter" },
            { id: "c", text: "Venus" },
            { id: "d", text: "Mars" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Earth", statement: "Third planet from the Sun." }],
            steps: [{ reasoning: "We live on Earth, the third planet.", marks: 1, markCode: "A" }],
            finalAnswer: "Earth",
          },
        },
        {
          id: "cips-u1-es-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) List the four main stages of the water cycle in order. (b) What provides the energy for the water cycle? (c) Name the eight planets in order. (d) What is an orbit? (e) What does the Moon orbit and what is it made of / what does it do? (f) Why do planets appear to shine in the sky? (g) Describe what happens to water vapour when it cools. (h) Explain why the water cycle never really 'stops'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Water cycle and Solar System", statement: "Integrated Earth and space answer." }],
            steps: [
              { reasoning: "(a) Evaporation, condensation, precipitation, collection.", marks: 1, markCode: "M" },
              { reasoning: "(b) The Sun's energy.", marks: 1, markCode: "M" },
              { reasoning: "(c) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", marks: 1, markCode: "M" },
              { reasoning: "(d) The path an object follows around another in space.", marks: 1, markCode: "M" },
              { reasoning: "(e) Orbits Earth; reflects sunlight; has phases.", marks: 1, markCode: "M" },
              { reasoning: "(f) They reflect sunlight — they don't produce their own light.", marks: 1, markCode: "M" },
              { reasoning: "(g) It condenses into tiny droplets forming clouds.", marks: 1, markCode: "M" },
              { reasoning: "(h) Water keeps cycling: evaporates, condenses, falls, returns — continuous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cycle stages, Sun's energy, 8 planets, orbit definition, Moon facts, reflected light, condensation, continuous cycle.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-es-notes",
      title: "Earth and space — notes",
      summary: "Water cycle: evaporation → condensation → precipitation → collection. Sun centre; 8 planets; Moon orbits Earth, reflects light.",
      sections: [
        { heading: "Water cycle", body: "Sun's energy drives evaporation; clouds form in condensation; rain is precipitation." },
        { heading: "Solar System", body: "Planets orbit the Sun; Moon orbits Earth; all shine by reflected sunlight." },
      ],
    },
  ],
};
