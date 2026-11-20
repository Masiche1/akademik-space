import type { Lesson } from "../../../types.ts";

export const lesson225: Lesson = {
  id: "cips-u2-lesson-2-25",
  code: "2-25",
  title: "Stage 5 — Earth: Atmosphere, Orbit and Seasons",
  goal: "I CAN describe the atmosphere and pollution, explain Earth's orbit and tilt creating seasons, and describe satellites and the Moon's cycle.",
  standards: ["Cambridge Primary Science 0097 Stage 5: Earth and space",
  "Cambridge Primary Science 0097 framework substrands: 5ESp, 5ESs"],
  stage: 5,
  vocabulary: [
    { term: "Atmosphere", definition: "The layer of air surrounding the Earth — a mixture of gases." },
    { term: "Pollution", definition: "Harmful substances introduced by humans that damage the environment." },
    { term: "Orbit", definition: "The path Earth follows around the Sun — slightly elliptical, anticlockwise." },
    { term: "Axial tilt", definition: "Earth's axis leaning ~23.5°, causing seasons." },
    { term: "Satellite", definition: "An object orbiting a larger body — natural (Moon) or artificial." },
    { term: "Lunar cycle", definition: "The Moon's changing appearance over ~29.5 days." },
  ],
  concepts: [
    {
      id: "cips-u2-s25-earth",
      title: "Atmosphere, orbit, seasons and the Moon",
      skill: "Describe atmosphere/pollution, Earth's orbit and tilt, seasons and lunar phases at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Atmosphere and pollution",
            body: "The atmosphere is a mixture of gases — mostly nitrogen, with oxygen, carbon dioxide and water vapour. Most water on Earth isn't pure — it has dissolved substances. Pollution is when humans add harmful substances: smoke, plastic, chemical waste — damaging air, water and land.",
          },
          {
            heading: "Orbit, seasons and Moon",
            body: "Earth orbits the Sun anticlockwise on a slightly elliptical path taking ~365 days. Earth's axis is tilted ~23.5° — as it orbits, different hemispheres tilt towards/away from the Sun, creating seasons. The Moon is Earth's natural satellite; its phases cycle as it orbits Earth — new, crescent, half, gibbous, full.",
          },
        ],
        keyFormulas: [
          { name: "Seasons", statement: "axial tilt + orbit → hemispheres get different sunlight" },
          { name: "Orbit", statement: "Earth around Sun ~365 days; Moon around Earth ~29.5 days" },
        ],
        workedExample: {
          problem: "Why is it summer in Australia when it's winter in the UK?",
          solution: "Earth's tilt means when the northern hemisphere tilts away from the Sun (winter), the southern hemisphere tilts towards it (summer).",
        },
      },
      questions: [
        {
          id: "cips-u2-at-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the atmosphere?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The layer of air surrounding Earth" }, { id: "b", text: "A type of rock" }, { id: "c", text: "The Moon's orbit" }, { id: "d", text: "A weather machine" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Atmosphere", statement: "Air layer around Earth." }],
            steps: [{ reasoning: "Atmosphere = gaseous envelope around Earth.", marks: 1, markCode: "M" }],
            finalAnswer: "Layer of air around Earth",
          },
        },
        {
          id: "cips-u2-at-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the main gases in the atmosphere and what causes seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Atmosphere and seasons", statement: "Gases + axial tilt." }],
            steps: [
              { reasoning: "Nitrogen, oxygen, carbon dioxide, water vapour.", marks: 1, markCode: "M" },
              { reasoning: "Earth's axial tilt (~23.5°) as it orbits the Sun.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "N₂, O₂, CO₂, water vapour; axial tilt",
          },
        },
        {
          id: "cips-u2-at-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how pollution harms the environment, and describe the Moon's phases over a month.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Pollution and lunar cycle", statement: "Harmful substances; phases as Moon orbits." }],
            steps: [
              { reasoning: "Pollution: harmful substances damage air/water/land and living things.", marks: 1, markCode: "M" },
              { reasoning: "Phases: new → crescent → half → gibbous → full → back.", marks: 1, markCode: "M" },
              { reasoning: "Caused by Moon's orbit position relative to Sun/Earth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollution harms environment; phases cycle ~29.5 days",
          },
        },
        {
          id: "cips-u2-at-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Describe the atmosphere's composition. (b) Give two examples of pollution and their effects. (c) Explain why Earth has seasons. (d) Describe Earth's orbit around the Sun. (e) What is a satellite — give one natural and one artificial example. (f) Describe the Moon's phases. (g) Why do seasons differ between hemispheres? (h) How long is one Earth year and one lunar month?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Earth and space", statement: "Atmosphere, pollution, seasons, orbit, satellites, Moon." }],
            steps: [
              { reasoning: "(a) Gas mixture: N₂, O₂, CO₂, water vapour.", marks: 1, markCode: "M" },
              { reasoning: "(b) Two pollution examples + effects (smoke→air, plastic→wildlife).", marks: 1, markCode: "M" },
              { reasoning: "(c) Axial tilt ~23.5° changes sunlight per hemisphere.", marks: 1, markCode: "M" },
              { reasoning: "(d) Anticlockwise, slightly elliptical, ~365 days.", marks: 1, markCode: "M" },
              { reasoning: "(e) Object orbiting larger body; Moon natural, artificial satellites e.g. GPS.", marks: 1, markCode: "M" },
              { reasoning: "(f) New→crescent→half→gibbous→full cycle.", marks: 1, markCode: "M" },
              { reasoning: "(g) Tilt means opposite hemispheres face Sun at different times.", marks: 1, markCode: "M" },
              { reasoning: "(h) Year ~365 days; lunar month ~29.5 days.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Atmosphere gases, pollution, tilt→seasons, orbit, satellites, Moon phases, hemisphere seasons, year/month lengths.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-at-notes",
      title: "Earth and space — notes",
      summary: "Atmosphere = gas mixture; pollution harms. Axial tilt → seasons. Earth orbits Sun ~365d; Moon phases ~29.5d.",
      sections: [
        { heading: "Atmosphere", body: "Mostly nitrogen + oxygen; pollution adds harmful substances." },
        { heading: "Seasons and Moon", body: "Tilt + orbit = seasons; Moon's orbit = phases; satellites orbit planets/stars." },
      ],
    },
  ],
};
