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
            { id: "a", text: "Evaporation" }, { id: "b", text: "Condensation" }, { id: "c", text: "Precipitation" }, { id: "d", text: "Collection" },
          ], correctChoiceId: "a" },
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
