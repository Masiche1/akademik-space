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
            { id: "a", text: "A type of rock" },
            { id: "b", text: "The layer of air surrounding Earth" },
            { id: "c", text: "The Moon's orbit" },
            { id: "d", text: "A weather machine" },
          ], correctChoiceId: "b" },
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
        {
          id: "cips-u2-at-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is MOST abundant in the atmosphere?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Oxygen" },
            { id: "b", text: "Nitrogen" },
            { id: "c", text: "Helium" },
            { id: "d", text: "Carbon dioxide" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Atmosphere", statement: "Mostly nitrogen." }],
            steps: [{ reasoning: "Nitrogen is the most abundant gas.", marks: 1, markCode: "A" }],
            finalAnswer: "Nitrogen",
          },
        },
        {
          id: "cips-u2-at-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes the seasons?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Earth's distance from the Sun only" },
            { id: "b", text: "Clouds" },
            { id: "c", text: "The Moon" },
            { id: "d", text: "Earth's axial tilt" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seasons", statement: "Axial tilt causes seasons." }],
            steps: [{ reasoning: "Earth's ~23.5° tilt causes seasons.", marks: 1, markCode: "A" }],
            finalAnswer: "Earth's axial tilt",
          },
        },
        {
          id: "cips-u2-at-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many days does Earth take to orbit the Sun?",
          response: { type: "numeric", parts: [{ label: "a", answer: 365, unit: "days" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Orbit", statement: "~365 days per year." }],
            steps: [{ reasoning: "Earth takes ~365 days to orbit the Sun.", marks: 1, markCode: "M" }],
            finalAnswer: "365",
          },
        },
        {
          id: "cips-u2-at-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Moon takes ~29.5 days per lunar month. How many lunar months are in 59 days?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "months" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Lunar cycle", statement: "Divide by 29.5." }],
            steps: [
              { reasoning: "$59 \\div 29.5 \\approx 2$.", marks: 1, markCode: "M" },
              { reasoning: "About 2 lunar months.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-at-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a satellite?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A star" },
            { id: "b", text: "An object orbiting a larger body" },
            { id: "c", text: "A type of moon only" },
            { id: "d", text: "A type of planet" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Satellite", statement: "Orbits a larger body." }],
            steps: [{ reasoning: "A satellite is an object orbiting a larger body.", marks: 1, markCode: "A" }],
            finalAnswer: "An object orbiting a larger body",
          },
        },
        {
          id: "cips-u2-at-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the most abundant gas and the gas we breathe for life.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Atmosphere", statement: "Nitrogen most; oxygen for life." }],
            steps: [
              { reasoning: "Nitrogen is most abundant.", marks: 1, markCode: "M" },
              { reasoning: "Oxygen is needed for breathing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nitrogen; oxygen",
          },
        },
        {
          id: "cips-u2-at-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why it's summer in Australia when it's winter in the UK.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Seasons", statement: "Tilt → opposite hemispheres get different sun." }],
            steps: [
              { reasoning: "Earth's axis is tilted ~23.5°.", marks: 1, markCode: "M" },
              { reasoning: "When northern hemisphere tilts away (winter), southern tilts towards Sun.", marks: 1, markCode: "M" },
              { reasoning: "So Australia gets more direct sunlight = summer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opposite hemispheres get different sunlight due to tilt",
          },
        },
        {
          id: "cips-u2-at-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the Moon's cycle called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The solar cycle" },
            { id: "b", text: "The water cycle" },
            { id: "c", text: "The lunar cycle" },
            { id: "d", text: "The orbit cycle" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Lunar cycle", statement: "Moon's changing appearance." }],
            steps: [{ reasoning: "The Moon's phases follow the lunar cycle.", marks: 1, markCode: "A" }],
            finalAnswer: "The lunar cycle",
          },
        },
        {
          id: "cips-u2-at-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a pollution survey, 12 sites have plastic pollution and 8 have smoke pollution. How many total polluted sites are there?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "sites" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pollution", statement: "Add pollution types." }],
            steps: [
              { reasoning: "$12 + 8 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 20 sites.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cips-u2-at-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the Moon's phases in order over one lunar month.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Lunar cycle", statement: "New → crescent → half → gibbous → full → back." }],
            steps: [
              { reasoning: "Start: new moon.", marks: 1, markCode: "M" },
              { reasoning: "Crescent → half → gibbous → full.", marks: 1, markCode: "M" },
              { reasoning: "Then waning back to new over ~29.5 days.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "new → crescent → half → gibbous → full → repeat",
          },
        },
        {
          id: "cips-u2-at-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is Earth's axis tilt?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0°" },
            { id: "b", text: "45°" },
            { id: "c", text: "~23.5°" },
            { id: "d", text: "90°" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Axial tilt", statement: "~23.5°." }],
            steps: [{ reasoning: "Earth's axis is tilted about 23.5°.", marks: 1, markCode: "A" }],
            finalAnswer: "~23.5°",
          },
        },
        {
          id: "cips-u2-at-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define atmosphere and name its main gases. (b) What is pollution? Give two examples. (c) What causes seasons? (d) Describe Earth's orbit. (e) What is a satellite — natural and artificial examples. (f) Describe the Moon's phases. (g) How long is a year and lunar month? (h) Why do seasons differ between hemispheres?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Atmosphere, orbit, seasons, Moon", statement: "Integrated Stage 5 Earth/space answer." }],
            steps: [
              { reasoning: "(a) Air layer; N₂, O₂, CO₂, water vapour.", marks: 1, markCode: "M" },
              { reasoning: "(b) Harmful substances added by humans; e.g. smoke, plastic.", marks: 1, markCode: "M" },
              { reasoning: "(c) Earth's ~23.5° axial tilt.", marks: 1, markCode: "M" },
              { reasoning: "(d) Anticlockwise, slightly elliptical, ~365 days.", marks: 1, markCode: "M" },
              { reasoning: "(e) Orbits larger body; Moon natural, GPS artificial.", marks: 1, markCode: "M" },
              { reasoning: "(f) new→crescent→half→gibbous→full→repeat.", marks: 1, markCode: "M" },
              { reasoning: "(g) Year ~365 days; lunar month ~29.5 days.", marks: 1, markCode: "M" },
              { reasoning: "(h) Opposite hemispheres face Sun at different times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Atmosphere, pollution, tilt→seasons, orbit, satellites, Moon phases, year/month, hemisphere seasons.",
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
