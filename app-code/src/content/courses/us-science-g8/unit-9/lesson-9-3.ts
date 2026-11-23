import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "s8-u9-lesson-9-3",
  code: "9-3",
  title: "Earth's Place in the Universe: Synthesis",
  goal: "I CAN integrate knowledge of Earth's position, solar system, stars and galaxies to understand our cosmic context.",
  standards: [
    "MS-ESS1-1",
    "MS-ESS1-2",
    "MS-ESS1-3",
    "SEP: Constructing Explanations",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    {
      term: "Cosmic perspective",
      definition: "Understanding Earth's place in the vast universe.",
    },
    {
      term: "Habitable zone",
      definition: "Region around star where liquid water can exist.",
    },
    {
      term: "Goldilocks zone",
      definition: "Same as habitable zone — 'just right' conditions.",
    },
    {
      term: "Exoplanet",
      definition: "Planet orbiting a star other than the Sun.",
    },
    {
      term: "Solar system scale",
      definition: "Distances and sizes of solar system objects.",
    },
    { term: "Universe scale", definition: "Vast distances between galaxies." },
  ],
  concepts: [
    {
      id: "s8-u9-habitable",
      title: "Habitable zones and exoplanets",
      skill:
        "Explain what makes a planet habitable and how we search for exoplanets.",
      lesson: {
        sections: [
          {
            heading: "Habitable zone",
            body: "The **habitable zone** (Goldilocks zone) is the region around a star where liquid water can exist on a planet's surface:\n\n- Too close: too hot → water evaporates.\n- Too far: too cold → water freezes.\n- Just right: liquid water possible.\n\nEarth is in the Sun's habitable zone.",
          },
          {
            heading: "Exoplanets",
            body: "**Exoplanets** are planets orbiting other stars. Thousands discovered:\n\n- Detected by transit method (dimming) or radial velocity (wobble).\n- Some may be in habitable zones.\n- Search for life focuses on Earth-like planets.",
          },
        ],
        keyFormulas: [
          {
            name: "Habitable zone",
            statement: "Region where liquid water can exist.",
          },
          {
            name: "Exoplanet detection",
            statement: "Transit method + radial velocity.",
          },
          {
            name: "Earth's advantage",
            statement: "Right distance + atmosphere + magnetic field.",
          },
        ],
        workedExample: {
          problem: "Why is Earth habitable but Venus and Mars not?",
          solution:
            "Earth is in habitable zone with liquid water; Venus too hot, Mars too cold.",
        },
      },
      questions: [
        {
          id: "s8-u9-habitable-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the habitable zone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where life exists" },
              { id: "b", text: "Where liquid water can exist" },
              { id: "c", text: "Where stars form" },
              { id: "d", text: "Where planets orbit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habitable zone",
                statement: "Region where liquid water can exist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Habitable zone = right temperature for liquid water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Where liquid water can exist.",
            commonErrors: ["Choosing (a): life may exist elsewhere."],
          },
        },
        {
          id: "s8-u9-habitable-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What conditions make Earth habitable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earth's habitability",
                statement: "Right distance, atmosphere, magnetic field.",
              },
            ],
            steps: [
              {
                reasoning: "Right distance from Sun → liquid water.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Atmosphere → breathable air, protects from radiation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Magnetic field → protects from solar wind.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Distance + atmosphere + magnetic field.",
            commonErrors: ["Listing only one factor."],
          },
        },
        {
          id: "s8-u9-habitable-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do astronomers detect exoplanets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Exoplanet detection",
                statement: "Transit + radial velocity methods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transit: planet passes in front of star → dims light.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Radial velocity: planet's gravity wobbles star → Doppler shift.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Direct imaging: rare, needs bright star contrast.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Thousands of exoplanets confirmed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Transit method + radial velocity.",
            commonErrors: ["Not explaining methods."],
          },
        },
        {
          id: "s8-u9-habitable-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Could life exist on a planet outside the habitable zone?",
          parts: [
            { label: "a", prompt: "What conditions might allow it?", marks: 3 },
            {
              label: "b",
              prompt: "Give an example from our solar system.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What evidence would we look for?",
              marks: 2,
            },
            { label: "d", prompt: "Why is this speculative?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Life possibilities",
                statement: "Subsurface oceans, extremeophiles possible.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Subsurface oceans, geothermal heat, different biochemistry.",
                marks: 3,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Europa (Jupiter's moon) may have subsurface ocean.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Biosignatures: oxygen, methane, water vapor in atmosphere.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "We don't know if life requires Earth-like conditions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Subsurface heat/ocean (b) Europa (c) Biosignatures (d) Unknown biochemistry.",
            commonErrors: ["Saying impossible."],
          },
        },
      ],
    },
    {
      id: "s8-u9-cosmic-scale",
      title: "Cosmic Scale and Perspective",
      skill:
        "Understand the vast scale of the universe and Earth's place within it.",
      lesson: {
        sections: [
          {
            heading: "Scale of the universe",
            body: "The universe is unimaginably vast:\n\n- **Earth**: ~12,700 km diameter.\n- **Sun**: ~1.4 million km diameter (109 Earths).\n- **Solar system**: extends ~4.5 billion km (Neptune).\n- **Milky Way**: ~100,000 light-years across.\n- **Observable universe**: ~93 billion light-years across.",
          },
          {
            heading: "Cosmic perspective",
            body: "Understanding our place:\n\n- Earth is a tiny planet around an average star.\n- Sun is one of ~100 billion stars in Milky Way.\n- Milky Way is one of ~100 billion+ galaxies.\n- This perspective emphasizes how special (and isolated) Earth is.",
          },
        ],
        keyFormulas: [
          {
            name: "Universe scale",
            statement: "Earth → Sun → solar system → galaxy → universe.",
          },
          {
            name: "Observable universe",
            statement: "~93 billion light-years across.",
          },
          {
            name: "Cosmic perspective",
            statement: "Earth is tiny and isolated in vast universe.",
          },
        ],
        workedExample: {
          problem: "How many Earths could fit inside the Sun?",
          solution: "~1.3 million Earths could fit inside the Sun's volume.",
        },
      },
      questions: [
        {
          id: "s8-u9-scale-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many Earths could fit inside the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "~100" },
              { id: "b", text: "~1,000" },
              { id: "c", text: "~1 million" },
              { id: "d", text: "~100 million" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Solar scale",
                statement: "Sun is ~109 Earths wide; ~1.3 million by volume.",
              },
            ],
            steps: [
              {
                reasoning: "Sun's volume ≈ 1.3 million Earth volumes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** ~1 million.",
            commonErrors: ["Choosing (b): too low."],
          },
        },
        {
          id: "s8-u9-scale-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these from smallest to largest: Earth, Sun, solar system, Milky Way, observable universe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cosmic scale",
                statement: "Earth < Sun < solar system < galaxy < universe.",
              },
            ],
            steps: [
              {
                reasoning: "Earth (~12,700 km) < Sun (~1.4 million km).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Solar system (~4.5 billion km) < Milky Way (~100k ly).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Observable universe (~93 billion ly) is largest.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Earth → Sun → solar system → Milky Way → observable universe.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "s8-u9-scale-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cosmic perspective is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cosmic perspective",
                statement: "Shows Earth's place in vast universe.",
              },
            ],
            steps: [
              {
                reasoning: "Shows Earth is tiny fraction of universe.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Highlights how isolated/special Earth is.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Emphasizes need to protect Earth's only known life.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Promotes humility and scientific curiosity.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Shows Earth's place, uniqueness, and importance.",
            commonErrors: ["Saying it's just numbers."],
          },
        },
        {
          id: "s8-u9-scale-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare distances: Earth to Moon (384,000 km), Earth to Sun (150 million km), Sun to nearest star (4.2 light-years).",
          parts: [
            { label: "a", prompt: "Which is farthest?", marks: 2 },
            {
              label: "b",
              prompt: "How many times farther is Earth-Sun than Earth-Moon?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why can't we compare light-years to km directly?",
              marks: 2,
            },
            { label: "d", prompt: "What does this scale tell us?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance comparison",
                statement: "Different units require conversion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sun to nearest star is farthest (4.2 ly ≈ 40 trillion km).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "$150 \times 10^6 / 384,000 \approx 390$ times farther.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Light-year is distance unit; need conversion to km.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Universe is vast; objects are far apart.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Star (b) ~390× (c) Different units (d) Vast universe.",
            commonErrors: ["Not converting units."],
          },
        },
      ],
    },
    {
      id: "s8-u9-review",
      title: "Earth in Space: Integrated Review",
      skill:
        "Integrate gravity, orbits, seasons, solar system and cosmic scale knowledge.",
      lesson: {
        sections: [
          {
            heading: "Review summary",
            body: "Earth's place in universe:\n\n- **Gravity**: governs orbits and falls.\n- **Orbits**: planets orbit Sun; Moon orbits Earth.\n- **Seasons**: axial tilt causes seasons.\n- **Solar system**: 8 planets + asteroids/Kuiper belt.\n- **Stars/galaxies**: Sun is average star in Milky Way.\n- **Cosmic scale**: universe is vast; Earth is tiny.",
          },
          {
            heading: "Key relationships",
            body: "- Gravity + inertia → orbits.\n- Axial tilt → seasons.\n- Distance from Sun → temperature.\n- Planet type → characteristics.\n- Galaxy type → structure.",
          },
        ],
        keyFormulas: [
          {
            name: "Review",
            statement:
              "Gravity, orbits, seasons, solar system, stars, galaxies.",
          },
          {
            name: "Relationships",
            statement:
              "Tilt → seasons; distance → temperature; type → characteristics.",
          },
        ],
        workedExample: {
          problem: "Explain Earth's special place in the universe.",
          solution:
            "Right distance from Sun, right size, right conditions for life — rare in universe.",
        },
      },
      questions: [
        {
          id: "s8-u9-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What keeps planets in orbit around the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetism" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Friction" },
              { id: "d", text: "Light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbital gravity",
                statement: "Gravity provides centripetal force.",
              },
            ],
            steps: [
              {
                reasoning: "Gravity keeps planets in orbit.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Gravity.",
            commonErrors: ["Choosing (a): magnetism doesn't govern orbits."],
          },
        },
        {
          id: "s8-u9-review-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three factors making Earth habitable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earth's habitability",
                statement: "Distance, atmosphere, magnetic field.",
              },
            ],
            steps: [
              {
                reasoning: "Right distance from Sun → liquid water.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Atmosphere → breathable air.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Magnetic field → protects from solar wind.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Distance + atmosphere + magnetic field.",
            commonErrors: ["Missing a factor."],
          },
        },
        {
          id: "s8-u9-review-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how Earth's axial tilt affects our climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Axial tilt",
                statement: "23.5° tilt → seasons and climate patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Axial tilt (23.5°) causes uneven sunlight distribution.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Creates seasons (summer/winter).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Affects climate zones (tropical, temperate, polar).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Without tilt: no seasons, different climate patterns.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Axial tilt → seasons + climate zones.",
            commonErrors: ["Saying tilt causes distance changes."],
          },
        },
        {
          id: "s8-u9-review-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a scale model comparing Earth, Sun, and nearest star.",
          parts: [
            {
              label: "a",
              prompt: "If Earth is 1 cm, how big is Sun?",
              marks: 3,
            },
            { label: "b", prompt: "How far should nearest star be?", marks: 3 },
            { label: "c", prompt: "What does this model show?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scale modeling",
                statement: "Use ratios to represent vast distances.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sun diameter = 109 Earths → 109 cm ≈ 1.1 m.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "4.2 ly ≈ 40 trillion km; at this scale, ~28,000 km away.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Shows vast distances; stars are extremely far apart.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) ~1.1 m (b) ~28,000 km (c) Vast distances.",
            commonErrors: ["Not using consistent scale."],
          },
        },
      ],
    },
  ],
};
