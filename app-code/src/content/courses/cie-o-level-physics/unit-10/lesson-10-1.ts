import type { Lesson } from "../../../types.ts";

export const lessonp101: Lesson = {
  id: "olphys-u10-lesson-10-1",
  code: "10-1",
  title: "Space and the Universe",
  goal: "I CAN describe the solar system, stars and the expanding universe.",
  standards: ["5054 10.1", "5054 10.2"],
  vocabulary: [
    { term: "Solar system", definition: "Sun + 8 planets + moons, asteroids, comets." },
    { term: "Planet", definition: "Large body orbiting a star; cleared its orbit." },
    { term: "Star", definition: "Luminous sphere of gas producing energy by fusion." },
    { term: "Galaxy", definition: "Huge group of stars, gas and dust (e.g. Milky Way)." },
    { term: "Red shift", definition: "Wavelengths stretched as objects move away — evidence of expansion." },
    { term: "Big Bang", definition: "Theory that universe began ~13.8 billion years ago from expansion." },
    { term: "Solar eclipse", definition: "Moon blocks Sun's light from Earth." },
    { term: "Lunar eclipse", definition: "Earth's shadow falls on Moon." },
  ],
  concepts: [
    {
      id: "olphys-u10-solar-system",
      title: "The solar system",
      skill: "Describe planets, orbits, eclipses and the structure of the solar system.",
      lesson: {
        sections: [
          {
            heading: "Solar system",
            body: "Sun at centre; 8 planets orbit (Mercury→Neptune). Terrestrial (rocky, small, dense): Mercury, Venus, Earth, Mars. Gas giants (large, low density): Jupiter, Saturn, Uranus, Neptune. Asteroid belt between Mars/Jupiter; comets beyond.",
          },
          {
            heading: "Planet facts",
            body: "- Closer to Sun → shorter year, hotter.\n- Larger planets → stronger gravity.\n- Moons orbit planets; Earth has 1, Jupiter 90+.\n- Earth: only known life; liquid water, atmosphere.",
          },
          {
            heading: "Eclipses",
            body: "**Solar**: Moon between Sun and Earth → shadow on Earth.\n**Lunar**: Earth between Sun and Moon → Earth's shadow on Moon (red 'blood moon').",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do inner planets have shorter years than outer planets?",
          solution: "They orbit closer to the Sun — smaller orbit circumference → shorter orbital period.",
        },
      },
      questions: [
        {
          id: "olphys-u10-solar-system-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is at the centre of the solar system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Earth" }, { id: "b", text: "The Sun" }, { id: "c", text: "Jupiter" }, { id: "d", text: "The Moon" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Solar system", statement: "Sun at centre." }],
            steps: [{ reasoning: "Recall.", working: "\\text{Sun}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The Sun",
            commonErrors: ["Geocentric thinking."],
          },
        },
        {
          id: "olphys-u10-solar-system-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish terrestrial planets from gas giants.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Planets", statement: "Terrestrial: rocky small; gas giants: large gas/ice." }],
            steps: [
              { reasoning: "Terrestrial features.", marks: 1, markCode: "M" },
              { reasoning: "Gas giant features.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Terrestrial planets are small, rocky and dense (Mercury-Mars); gas giants are large, low-density gas/ice giants (Jupiter-Neptune).",
            commonErrors: ["Saying 'biggest = terrestrial' — reversed."],
          },
        },
        {
          id: "olphys-u10-solar-system-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a solar and lunar eclipse.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Eclipses", statement: "Solar: Moon blocks Sun; lunar: Earth blocks Sun." }],
            steps: [
              { reasoning: "Solar eclipse alignment.", marks: 1, markCode: "M" },
              { reasoning: "Moon between Sun and Earth.", marks: 1, markCode: "M" },
              { reasoning: "Lunar: Earth between Sun and Moon.", marks: 1, markCode: "M" },
              { reasoning: "Conclude difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solar eclipse: Moon passes between Sun and Earth, casting shadow on Earth. Lunar eclipse: Earth passes between Sun and Moon, Earth's shadow falls on Moon.",
            commonErrors: ["Swapping which body is in middle."],
          },
        },
        {
          id: "olphys-u10-solar-system-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the solar system and the characteristics of planets.",
          parts: [
            { label: "a", prompt: "Describe the structure.", marks: 3 },
            { label: "b", prompt: "Compare terrestrial and gas giant planets.", marks: 3 },
            { label: "c", prompt: "Explain why inner planets have shorter years.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Solar system", statement: "Sun+8 planets; terrestrial inner, gas giants outer." }],
            steps: [
              { part: "a", reasoning: "Sun centre, planets orbit.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "8 planets + asteroid belt.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Terrestrial: rocky small dense.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gas giants: large low density.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Inner = smaller orbits.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shorter path → shorter year.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sun+8 planets (b) rocky vs gas giants (c) smaller orbit→shorter year",
            commonErrors: ["In (c) saying 'closer = faster spin' — it's orbital period."],
          },
        },
      ],
    },
    {
      id: "olphys-u10-universe",
      title: "Stars and the expanding universe",
      skill: "Describe stars, galaxies and evidence for the expanding universe.",
      lesson: {
        sections: [
          {
            heading: "Stars",
            body: "Luminous spheres of gas producing energy by **fusion** (H→He). Sun = medium star. Colour indicates temperature: blue=hot, red=cool. Lifecycle: nebula → main sequence → red giant → white dwarf/neutron star/black hole.",
          },
          {
            heading: "Galaxies",
            body: "Huge groups of stars. Milky Way = our galaxy (spiral). Billions of galaxies in observable universe.",
          },
          {
            heading: "Expanding universe",
            body: "**Red shift**: light from distant galaxies stretched to red (longer λ) → moving away. **Hubble's law**: farther = faster recession. **Big Bang** theory: universe began ~13.8 billion years ago and is expanding.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What does red shift tell us about distant galaxies?",
          solution: "Their light is stretched to longer (red) wavelengths — evidence they're moving away from us; universe is expanding.",
        },
      },
      questions: [
        {
          id: "olphys-u10-universe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What produces energy in stars?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fission" }, { id: "b", text: "Fusion" }, { id: "c", text: "Combustion" }, { id: "d", text: "Radioactivity" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Stars", statement: "Fusion of hydrogen." }],
            steps: [{ reasoning: "Recall.", working: "\\text{fusion}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Fusion",
            commonErrors: ["Fission is nuclear reactors."],
          },
        },
        {
          id: "olphys-u10-universe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is red shift?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Red shift", statement: "Wavelengths stretched as objects recede." }],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The stretching of light wavelengths to longer (red) wavelengths as distant objects move away — evidence of cosmic expansion.",
            commonErrors: ["Saying 'stars turn red' — it's wavelength shift."],
          },
        },
        {
          id: "olphys-u10-universe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how red shift provides evidence for the expanding universe.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Red shift", statement: "Distant galaxies show red shift → moving away." }],
            steps: [
              { reasoning: "Light from galaxies shifted to red.", marks: 1, markCode: "M" },
              { reasoning: "Means moving away from us.", marks: 1, markCode: "M" },
              { reasoning: "Farther = greater red shift = faster.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: universe expanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Distant galaxies show red shift — their light wavelengths stretched — indicating they move away; greater distance = greater shift, so universe is expanding (Big Bang theory).",
            commonErrors: ["Saying 'galaxies are red' — it's Doppler shift."],
          },
        },
        {
          id: "olphys-u10-universe-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the lifecycle of a star like the Sun.",
          parts: [
            { label: "a", prompt: "Describe the main sequence stage.", marks: 3 },
            { label: "b", prompt: "Describe what happens after hydrogen runs out.", marks: 3 },
            { label: "c", prompt: "Describe the final stage for a Sun-like star.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Star lifecycle", statement: "Nebula→main sequence→red giant→white dwarf." }],
            steps: [
              { part: "a", reasoning: "Fusion H→He in core.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Stable for billions of years.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Core contracts, outer expands.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Becomes red giant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Outer layers shed (planetary nebula).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Core → white dwarf.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fusion H→He stable (b) red giant (c) planetary nebula+white dwarf",
            commonErrors: ["In (c) saying supernova — that's for massive stars."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u10-space-notes",
      title: "Space — revision notes",
      summary: "Solar system, planets, eclipses, stars, galaxies, red shift.",
      sections: [
        {
          heading: "Key facts",
          body: "Sun+8 planets; terrestrial inner (rocky), gas giants outer. Solar eclipse: Moon blocks Sun; lunar: Earth blocks. Stars fuse H→He. Red shift = expansion evidence. Big Bang ~13.8 billion years.",
        },
        {
          heading: "Exam technique",
          body: "- Inner planets: shorter years (smaller orbits).\n- Red shift means moving away, not 'red star'.",
        },
      ],
    },
  ],
};
