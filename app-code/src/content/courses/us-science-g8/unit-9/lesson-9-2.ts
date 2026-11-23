import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "s8-u9-lesson-9-2",
  code: "9-2",
  title: "The Solar System and Beyond",
  goal: "I CAN describe the solar system, compare planets, and explain properties of stars and galaxies.",
  standards: [
    "MS-ESS1-1",
    "MS-ESS1-2",
    "MS-ESS1-3",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    { term: "Solar system", definition: "Sun and all objects orbiting it." },
    {
      term: "Terrestrial planet",
      definition: "Rocky inner planet (Mercury, Venus, Earth, Mars).",
    },
    {
      term: "Gas giant",
      definition:
        "Large gaseous outer planet (Jupiter, Saturn, Uranus, Neptune).",
    },
    {
      term: "Asteroid belt",
      definition: "Region of rocky debris between Mars and Jupiter.",
    },
    {
      term: "Kuiper belt",
      definition: "Region of icy objects beyond Neptune.",
    },
    { term: "Star", definition: "Luminous sphere of plasma held by gravity." },
    {
      term: "Galaxy",
      definition: "Collection of stars, gas, dust bound by gravity.",
    },
    {
      term: "Light-year",
      definition: "Distance light travels in one year (~9.5 trillion km).",
    },
  ],
  concepts: [
    {
      id: "s8-u9-solar-system",
      title: "Solar system structure",
      skill:
        "Describe the solar system's components and planetary characteristics.",
      lesson: {
        sections: [
          {
            heading: "Planetary order",
            body: "Inner to outer:\n\n1. Mercury (smallest, closest)\n2. Venus (hottest, thick atmosphere)\n3. Earth (only known life)\n4. Mars (red, thin atmosphere)\n5. Jupiter (largest)\n6. Saturn (rings)\n7. Uranus (rotates on side)\n8. Neptune (farthest, windiest)",
          },
          {
            heading: "Comparing planets",
            body: "- **Terrestrial**: rocky, small, dense, few/no moons.\n- **Gas giants**: gaseous, large, low density, many moons, rings.\n- **Asteroid belt**: between Mars and Jupiter.\n- **Kuiper belt**: icy objects beyond Neptune (Pluto).",
          },
        ],
        keyFormulas: [
          {
            name: "Planet types",
            statement: "Terrestrial (rocky) vs gas giants (gaseous).",
          },
          { name: "Asteroid belt", statement: "Between Mars and Jupiter." },
          { name: "Kuiper belt", statement: "Beyond Neptune — icy objects." },
        ],
        workedExample: {
          problem:
            "Why is Venus hotter than Mercury despite being farther from Sun?",
          solution:
            "Venus has thick CO2 atmosphere causing runaway greenhouse effect.",
        },
      },
      questions: [
        {
          id: "s8-u9-solar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the largest planet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saturn" },
              { id: "b", text: "Jupiter" },
              { id: "c", text: "Neptune" },
              { id: "d", text: "Earth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Jupiter",
                statement: "Largest planet in solar system.",
              },
            ],
            steps: [
              {
                reasoning: "Jupiter is the largest planet.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Jupiter.",
            commonErrors: ["Choosing Saturn."],
          },
        },
        {
          id: "s8-u9-solar-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between terrestrial and gas giant planets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Planet types",
                statement: "Terrestrial = rocky; gas giants = gaseous.",
              },
            ],
            steps: [
              {
                reasoning: "Terrestrial: rocky, small, dense (Mercury-Mars).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Gas giants: gaseous, large, low density (Jupiter-Neptune).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Terrestrial have few moons; gas giants have many.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Terrestrial = rocky; gas giants = gaseous.",
            commonErrors: ["Confusing planet types."],
          },
        },
        {
          id: "s8-u9-solar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is Venus hotter than Mercury despite being farther from Sun?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Greenhouse effect",
                statement: "Venus's CO2 atmosphere traps heat.",
              },
            ],
            steps: [
              {
                reasoning: "Venus has thick CO2 atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "CO2 traps heat via greenhouse effect.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Surface temp ~465°C — hotter than Mercury (~430°C).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Mercury has almost no atmosphere to trap heat.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Venus's thick CO2 atmosphere causes runaway greenhouse effect.",
            commonErrors: ["Saying distance determines temperature."],
          },
        },
        {
          id: "s8-u9-solar-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare inner and outer planets.",
          parts: [
            { label: "a", prompt: "What types are they?", marks: 2 },
            { label: "b", prompt: "Which has more moons?", marks: 2 },
            { label: "c", prompt: "Which is hotter?", marks: 2 },
            { label: "d", prompt: "Why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Planet comparison",
                statement: "Inner = terrestrial/hot; outer = gas giants/cold.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Inner: terrestrial (rocky). Outer: gas giants (gaseous).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Outer planets have more moons.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Inner planets are hotter (closer to Sun).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Inner closer → more solar radiation; outer farther → colder.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Terrestrial vs gas giants (b) Outer (c) Inner (d) Distance from Sun.",
            commonErrors: ["Reversing characteristics."],
          },
        },
      ],
    },
    {
      id: "s8-u9-stars-galaxies",
      title: "Stars and Galaxies",
      skill:
        "Describe star properties, stellar evolution, and galaxy structure.",
      lesson: {
        sections: [
          {
            heading: "Stars",
            body: "Stars are luminous spheres of plasma powered by nuclear fusion:\n\n- **Sun**: main-sequence star, G-type, ~4.6 billion years old.\n- **Star colors**: blue = hot, yellow = medium, red = cool.\n- **Magnitude**: brightness scale (lower = brighter).\n- **Distance**: measured in light-years.",
          },
          {
            heading: "Stellar evolution",
            body: "Stars evolve through stages:\n\n- **Birth**: nebula collapses → protostar.\n- **Main sequence**: hydrogen fusion (most stars).\n- **Red giant**: hydrogen depleted → expands/cools.\n- **Death**: white dwarf, neutron star, or black hole.",
          },
        ],
        keyFormulas: [
          { name: "Star colors", statement: "Blue = hot; red = cool." },
          {
            name: "Light-year",
            statement: "Distance light travels in one year.",
          },
          {
            name: "Stellar evolution",
            statement: "Nebula → protostar → main sequence → giant → remnant.",
          },
        ],
        workedExample: {
          problem: "Why do stars appear to twinkle?",
          solution:
            "Earth's atmosphere refracts light unevenly, causing apparent brightness changes.",
        },
      },
      questions: [
        {
          id: "s8-u9-stars-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What powers stars?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity" },
              { id: "b", text: "Nuclear fusion" },
              { id: "c", text: "Chemical reactions" },
              { id: "d", text: "Magnetism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Stellar energy",
                statement: "Nuclear fusion powers stars.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stars powered by nuclear fusion of hydrogen into helium.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Nuclear fusion.",
            commonErrors: ["Choosing (a): gravity holds star together."],
          },
        },
        {
          id: "s8-u9-stars-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the stages of stellar evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Stellar evolution",
                statement:
                  "Nebula → protostar → main sequence → giant → remnant.",
              },
            ],
            steps: [
              {
                reasoning: "Nebula collapses → protostar forms.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Main sequence: hydrogen fusion (most of star's life).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Red giant → white dwarf/neutron star/black hole.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Nebula → protostar → main sequence → giant → remnant.",
            commonErrors: ["Skipping stages."],
          },
        },
        {
          id: "s8-u9-stars-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why stars twinkle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Twinkling",
                statement:
                  "Atmospheric refraction causes apparent brightness changes.",
              },
            ],
            steps: [
              {
                reasoning: "Starlight passes through Earth's atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Atmosphere has varying density/temperature → refracts light unevenly.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This causes apparent brightness/color changes → twinkling.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Planets don't twinkle as much (extended disks).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Atmospheric refraction causes twinkling.",
            commonErrors: ["Saying stars actually change brightness."],
          },
        },
        {
          id: "s8-u9-stars-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Sun is 150 million km from Earth. Light travels at $3 \\times 10^8$ m/s.",
          parts: [
            {
              label: "a",
              prompt: "How long does sunlight take to reach Earth?",
              marks: 3,
            },
            { label: "b", prompt: "What is a light-year?", marks: 2 },
            {
              label: "c",
              prompt: "How far is the nearest star (Proxima Centauri)?",
              marks: 2,
            },
            { label: "d", prompt: "Why do we use light-years?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Light travel time",
                statement: "$t = d/v$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$t = 1.5 \\times 10^{11}/3 \\times 10^8 = 500$ s ≈ 8.3 minutes.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Distance light travels in one year (~9.5 trillion km).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "~4.2 light-years (~40 trillion km).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "More practical than km for astronomical distances.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) ~8.3 min (b) Light travel distance (c) 4.2 ly (d) Practical units.",
            commonErrors: ["Calculation errors."],
          },
        },
      ],
    },
    {
      id: "s8-u9-galaxies",
      title: "Galaxies and the Universe",
      skill:
        "Describe galaxy types, the Milky Way, and the expanding universe.",
      lesson: {
        sections: [
          {
            heading: "Galaxy types",
            body: "**Spiral galaxies**: flat disk with spiral arms (Milky Way).\n**Elliptical galaxies**: oval/spherical, little gas/dust.\n**Irregular galaxies**: no defined shape.\n\nThe **Milky Way** is a barred spiral galaxy ~100,000 light-years across.",
          },
          {
            heading: "Expanding universe",
            body: "**Hubble's law**: galaxies move away from us; farther = faster.\n\n- **Redshift**: light stretched to longer wavelengths as galaxies recede.\n- **Big Bang**: universe began ~13.8 billion years ago.\n- **Dark matter/energy**: invisible components affecting expansion.",
          },
        ],
        keyFormulas: [
          { name: "Galaxy types", statement: "Spiral, elliptical, irregular." },
          {
            name: "Milky Way",
            statement: "Barred spiral ~100,000 light-years.",
          },
          {
            name: "Hubble's law",
            statement: "Farther galaxies recede faster.",
          },
        ],
        workedExample: {
          problem: "Why is light from distant galaxies redshifted?",
          solution: "Universe expanding → wavelengths stretched → redshift.",
        },
      },
      questions: [
        {
          id: "s8-u9-galaxies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of galaxy is the Milky Way?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elliptical" },
              { id: "b", text: "Spiral" },
              { id: "c", text: "Irregular" },
              { id: "d", text: "Lenticular" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Milky Way",
                statement: "Barred spiral galaxy.",
              },
            ],
            steps: [
              {
                reasoning: "Milky Way is a barred spiral galaxy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Spiral.",
            commonErrors: ["Choosing elliptical."],
          },
        },
        {
          id: "s8-u9-galaxies-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the three main galaxy types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Galaxy types",
                statement: "Spiral, elliptical, irregular.",
              },
            ],
            steps: [
              {
                reasoning: "Spiral: disk with spiral arms (Milky Way).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Elliptical: oval/spherical, little gas.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Irregular: no defined shape.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Spiral, elliptical, irregular.",
            commonErrors: ["Missing a type."],
          },
        },
        {
          id: "s8-u9-galaxies-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what redshift tells us about distant galaxies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Redshift",
                statement: "Wavelength stretching → universe expansion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Light from galaxies stretched to longer wavelengths.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "More redshift = faster recession.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This is evidence for expanding universe.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Hubble's law: farther = faster recession.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Redshift indicates galaxies moving away — universe expanding.",
            commonErrors: ["Saying galaxies are moving toward us."],
          },
        },
        {
          id: "s8-u9-galaxies-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Milky Way is ~100,000 light-years across. Proxima Centauri is 4.2 light-years away.",
          parts: [
            {
              label: "a",
              prompt:
                "How many Milky Ways wide is the distance to Proxima Centauri?",
              marks: 3,
            },
            { label: "b", prompt: "Why does this scale seem small?", marks: 2 },
            {
              label: "c",
              prompt: "What does this tell us about the universe?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "How many galaxies are estimated to exist?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scale calculation",
                statement: "$100,000 / 4.2 \\approx 23,800$ Milky Ways.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$100,000 \\text{ ly} / 4.2 \\text{ ly} \\approx 23,800$ Milky Way widths.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Galaxies are far apart relative to their size.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Universe is vast; galaxies isolated.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "~100 billion+ galaxies estimated.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) ~23,800 (b) Galaxies far apart (c) Vast universe (d) ~100 billion.",
            commonErrors: ["Calculation errors."],
          },
        },
      ],
    },
  ],
};
