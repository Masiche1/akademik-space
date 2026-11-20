import type { Lesson } from "../../../types.ts";

export const lessonp102: Lesson = {
  id: "ciep-u10-lesson-10-2",
  code: "10-2",
  title: "The Solar System",
  goal: "I CAN describe planets, orbits and solar system structure.",
  standards: ["0655 10.2"],
  vocabulary: [
    { term: "Solar system", definition: "Sun + planets + moons + asteroids + comets." },
    { term: "Planet", definition: "Large body orbiting star, cleared its orbit." },
    { term: "Terrestrial planets", definition: "Rocky inner planets: Mercury, Venus, Earth, Mars." },
    { term: "Gas giants", definition: "Jovian outer planets: Jupiter, Saturn, Uranus, Neptune." },
    { term: "Asteroid belt", definition: "Rocky objects between Mars and Jupiter." },
    { term: "Comet", definition: "Icy body with tail when near Sun." },
    { term: "Moon", definition: "Natural satellite orbiting planet." },
    { term: "Orbit", definition: "Path of object around another due to gravity." },
  ],
  concepts: [
    {
      id: "ciep-u10-planets",
      title: "Planets and solar system",
      skill: "Describe planets, their characteristics and orbital properties.",
      lesson: {
        sections: [
          {
            heading: "Planet types",
            body: "- **Terrestrial** (inner): Mercury, Venus, Earth, Mars — rocky, small, dense\n- **Gas giants** (outer): Jupiter, Saturn — hydrogen/helium, large\n- **Ice giants**: Uranus, Neptune — water/ammonia ices",
          },
          {
            heading: "Orbital properties",
            body: "- Closer to Sun → shorter year, faster orbit\n- Earth: 365.25 days, 1 AU from Sun\n- Mercury: 88 days; Neptune: 165 years",
          },
          {
            heading: "Other bodies",
            body: "- Asteroid belt: between Mars/Jupiter\n- Comets: icy, long elliptical orbits, tails near Sun\n- Moons: Earth's Moon, Jupiter's many",
          },
        ],
        keyFormulas: [
          { name: "AU", statement: "$1\\ \\text{AU} = 1.5 \\times 10^{11}\\ \\text{m}$" },
        ],
        workedExample: {
          problem: "Which planet has the shortest year?",
          solution: "Mercury — closest to Sun, shortest orbit (88 days).",
        },
      },
      questions: [
        {
          id: "ciep-u10-planets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which are the terrestrial planets?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Jupiter, Saturn" }, { id: "b", text: "Mercury, Venus, Earth, Mars" }, { id: "c", text: "Uranus, Neptune" }, { id: "d", text: "All planets" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Planets", statement: "Inner four rocky." }],
            steps: [{ reasoning: "Recall.", working: "M,V,E,M", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Mercury, Venus, Earth, Mars",
            commonErrors: ["Including gas giants."],
          },
        },
        {
          id: "ciep-u10-planets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 1 AU?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "AU", statement: "Earth-Sun distance." }],
            steps: [
              { reasoning: "1.5×10¹¹ m.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Astronomical unit — mean Earth-Sun distance, 1.5×10¹¹ m.",
            commonErrors: ["Wrong value."],
          },
        },
        {
          id: "ciep-u10-planets-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why inner planets have shorter years than outer planets.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbits", statement: "Closer→faster orbit→shorter year." }],
            steps: [
              { reasoning: "Inner planets closer to Sun.", marks: 1, markCode: "M" },
              { reasoning: "Stronger gravity→faster orbit.", marks: 1, markCode: "M" },
              { reasoning: "Complete orbit quicker.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inner planets orbit closer to the Sun with stronger gravitational pull — they complete orbits faster, giving shorter years.",
            commonErrors: ["Not linking gravity to speed."],
          },
        },
        {
          id: "ciep-u10-planets-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the solar system.",
          parts: [
            { label: "a", prompt: "Planet types.", marks: 3 },
            { label: "b", prompt: "Orbital properties.", marks: 3 },
            { label: "c", prompt: "Other bodies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Solar system", statement: "Terrestrial/gas giants; orbits; asteroids/comets." }],
            steps: [
              { part: "a", reasoning: "Rocky inner vs gas outer.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Names correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Closer=shorter year.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Elliptical orbits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Asteroid belt.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comets/moons.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) terrestrial/gas (b) orbit properties (c) asteroids/comets",
            commonErrors: ["In (a) wrong planet groups."],
          },
        },
      ],
    },
    {
      id: "ciep-u10-gravity-space",
      title: "Gravity and space",
      skill: "Explain gravity in space and orbital motion.",
      lesson: {
        sections: [
          {
            heading: "Gravity in space",
            body: "Gravity acts everywhere — holds planets in orbit, keeps Moon orbiting Earth.\n\n- No atmosphere in space → no air resistance\n- Objects in orbit are in free fall\n- Weightlessness = falling around Earth",
          },
          {
            heading: "Orbital motion",
            body: "Planet's forward motion + gravity toward Sun = circular orbit.\n\n- Gravity provides centripetal force\n- Faster orbit → shorter period\n- Escape velocity needed to leave gravity",
          },
          {
            heading: "Space exploration",
            body: "Rockets overcome gravity; satellites orbit Earth.\n\nUses: communications, GPS, weather, astronomy.",
          },
        ],
        keyFormulas: [
          { name: "Gravitational PE", statement: "$GPE = \\dfrac{GMm}{r}$" },
        ],
        workedExample: {
          problem: "Why do astronauts float in space station?",
          solution: "They're in orbit — continuously falling around Earth, appearing weightless.",
        },
      },
      questions: [
        {
          id: "ciep-u10-gravity-space-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What keeps planets in orbit around the Sun?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Magnetism" }, { id: "b", text: "Gravity" }, { id: "c", text: "Friction" }, { id: "d", text: "Light" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gravity", statement: "Gravity provides centripetal force." }],
            steps: [{ reasoning: "Recall.", working: "\\text{gravity}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Gravity",
            commonErrors: ["No friction in space."],
          },
        },
        {
          id: "ciep-u10-gravity-space-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do astronauts appear weightless in orbit?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbit", statement: "Free fall around Earth." }],
            steps: [
              { reasoning: "Falling continuously.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They're in orbit — continuously falling toward Earth while moving forward fast enough to keep missing it.",
            commonErrors: ["Saying 'no gravity'."],
          },
        },
        {
          id: "ciep-u10-gravity-space-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how gravity enables orbital motion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbit", statement: "Gravity=centripetal force." }],
            steps: [
              { reasoning: "Forward motion + gravity.", marks: 1, markCode: "M" },
              { reasoning: "Gravity pulls toward centre.", marks: 1, markCode: "M" },
              { reasoning: "Circular path maintained.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An object's forward velocity combined with gravitational pull toward the centre creates a curved/orbital path — gravity acts as centripetal force.",
            commonErrors: ["Not mentioning velocity."],
          },
        },
        {
          id: "ciep-u10-gravity-space-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain gravity and orbital motion in space.",
          parts: [
            { label: "a", prompt: "Gravity in space.", marks: 3 },
            { label: "b", prompt: "Orbital motion.", marks: 3 },
            { label: "c", prompt: "Weightlessness explained.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Space", statement: "Gravity exists; orbit=free fall; weightlessness." }],
            steps: [
              { part: "a", reasoning: "Gravity everywhere.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Weaker further away.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Forward+gravity=orbit.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Centripetal force.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Falling around Earth.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No normal reaction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gravity exists (b) orbit mechanics (c) free fall=weightless",
            commonErrors: ["In (c) saying no gravity."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u10-planets-notes",
      title: "Solar system and space — revision notes",
      summary: "Planets, orbits, gravity in space, weightlessness.",
      sections: [
        {
          heading: "Key facts",
          body: "Terrestrial inner, gas giants outer. Closer=shorter year. Gravity=centripetal force. Weightlessness=free fall orbit.",
        },
        {
          heading: "Exam technique",
          body: "- Inner planets: shorter years.\n- Orbit needs velocity+gravity.\n- Astronauts weightless but gravity exists.",
        },
      ],
    },
  ],
};
