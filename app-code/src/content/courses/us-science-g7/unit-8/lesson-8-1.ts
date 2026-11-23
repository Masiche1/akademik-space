import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "s7-u8-lesson-8-1",
  code: "8-1",
  title: "The Solar System and Earth's Place",
  goal: "I CAN describe the structure of the solar system, explain Earth's position and conditions that support life, and compare Earth to other planets.",
  standards: [
    "MS-ESS1-1",
    "MS-ESS1-2",
    "MS-ESS1-3",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Solar system",
      definition:
        "The Sun and all objects that orbit it, including planets, moons, asteroids and comets.",
    },
    {
      term: "Planet",
      definition:
        "A large object that orbits a star and has cleared its orbital path.",
    },
    {
      term: "Terrestrial planet",
      definition:
        "A rocky planet close to the Sun: Mercury, Venus, Earth, Mars.",
    },
    {
      term: "Gas giant",
      definition:
        "A large planet made mostly of gas: Jupiter, Saturn, Uranus, Neptune.",
    },
    {
      term: "Asteroid",
      definition:
        "A rocky object that orbits the Sun, mostly found in the asteroid belt.",
    },
    {
      term: "Comet",
      definition:
        "An icy object that develops a glowing tail when near the Sun.",
    },
    {
      term: "Habitable zone",
      definition:
        "The region around a star where conditions might allow liquid water.",
    },
  ],
  concepts: [
    {
      id: "s7-u8-solar-system",
      title: "Structure of the solar system",
      skill:
        "Describe the planets, their order, and the types of objects in the solar system.",
      lesson: {
        sections: [
          {
            heading: "The Sun and planets",
            body: "The **solar system** is centered on the **Sun**, a star containing 99.8% of the system's mass. Eight planets orbit the Sun in elliptical paths:\n\n- **Terrestrial planets** (rocky, small, close to Sun): Mercury, Venus, Earth, Mars\n- **Gas giants** (large, gaseous, far from Sun): Jupiter, Saturn, Uranus, Neptune\n\nPlanets farther from the Sun take longer to orbit (longer years) and are colder on average.",
          },
          {
            heading: "Other objects",
            body: "- **Moons**: natural satellites orbiting planets (Earth has one).\n- **Asteroids**: rocky fragments, mostly in the asteroid belt between Mars and Jupiter.\n- **Comets**: icy bodies that develop tails when near the Sun.\n- **Dwarf planets**: objects like Pluto that orbit the Sun but haven't cleared their paths.",
          },
        ],
        keyFormulas: [
          {
            name: "Solar system",
            statement: "Sun + planets, moons, asteroids, comets.",
          },
          {
            name: "Terrestrial planets",
            statement: "Mercury, Venus, Earth, Mars — rocky, inner.",
          },
          {
            name: "Gas giants",
            statement: "Jupiter, Saturn, Uranus, Neptune — gaseous, outer.",
          },
        ],
        workedExample: {
          problem: "Order the planets from the Sun.",
          solution:
            "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
        },
      },
      questions: [
        {
          id: "s7-u8-solar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the largest planet in the solar system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth" },
              { id: "b", text: "Saturn" },
              { id: "c", text: "Jupiter" },
              { id: "d", text: "Neptune" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Jupiter",
                statement:
                  "Largest planet; more massive than all others combined.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jupiter is the largest planet — over twice the mass of all other planets combined.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Jupiter.",
            commonErrors: ["Choosing (b): Saturn is second largest."],
          },
        },
        {
          id: "s7-u8-solar-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between terrestrial planets and gas giants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Planet types",
                statement:
                  "Terrestrial = rocky, inner. Gas giants = gaseous, outer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Terrestrial: rocky, small, close to Sun (Mercury to Mars).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Gas giants: large, gaseous, far from Sun (Jupiter to Neptune).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Terrestrial have solid surfaces; gas giants are mostly hydrogen/helium.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Terrestrial = rocky, inner, small. Gas giants = gaseous, outer, large.",
            commonErrors: ["Saying gas giants are rocky."],
          },
        },
        {
          id: "s7-u8-solar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do outer planets have longer years than inner planets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbital mechanics",
                statement: "Farther planets have longer orbital periods.",
              },
            ],
            steps: [
              {
                reasoning: "Outer planets are farther from the Sun's gravity.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "They must travel a longer orbital path.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Weaker gravity means slower orbital speed.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "All factors combine to make outer planets' years longer.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Farther planets have longer paths, weaker gravity and slower speeds → longer years.",
            commonErrors: ["Saying outer planets move faster."],
          },
        },
        {
          id: "s7-u8-solar-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A comet is observed with a glowing tail as it approaches the Sun.",
          parts: [
            { label: "a", prompt: "What is a comet made of?", marks: 2 },
            {
              label: "b",
              prompt: "Why does it develop a tail near the Sun?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does this differ from an asteroid?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why is Pluto classified as a dwarf planet?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Small bodies",
                statement:
                  "Comets = icy; asteroids = rocky; dwarf planets = not cleared path.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ice, dust, rock — 'dirty snowballs'.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Solar radiation vaporizes ice, creating a glowing gas/dust tail.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Asteroids are rocky, mostly in asteroid belt; comets are icy and come from outer solar system.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Pluto hasn't cleared its orbital neighborhood of other objects.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Ice/dust/rock (b) Solar radiation vaporizes ice (c) Comets icy vs asteroids rocky (d) Not cleared path.",
            commonErrors: ["Saying comets are made of fire."],
          },
        },
      ],
    },
    {
      id: "s7-u8-earth-habitable",
      title: "Earth's Habitable Conditions",
      skill:
        "Explain the conditions that make Earth suitable for life and how they differ from other planets.",
      lesson: {
        sections: [
          {
            heading: "Conditions for life",
            body: "Earth supports life because of several factors:\n\n- **Distance from Sun**: in the habitable zone where liquid water can exist.\n- **Atmosphere**: contains oxygen, nitrogen and greenhouse gases that regulate temperature.\n- **Magnetic field**: protects from solar wind and radiation.\n- **Liquid water**: essential for all known life.\n- **Stable climate**: not too hot or cold.",
          },
          {
            heading: "Comparison to other planets",
            body: "- **Mercury**: too close, no atmosphere, extreme temperatures.\n- **Venus**: runaway greenhouse effect, surface ~460°C.\n- **Mars**: thin atmosphere, cold, but may have had water.\n- **Jupiter and beyond**: gas giants, no solid surface, extremely cold.",
          },
        ],
        keyFormulas: [
          {
            name: "Habitable zone",
            statement: "Region where liquid water can exist.",
          },
          {
            name: "Earth's advantages",
            statement:
              "Right distance, atmosphere, magnetic field, liquid water.",
          },
          {
            name: "Venus vs Earth",
            statement:
              "Venus has runaway greenhouse; Earth has balanced greenhouse.",
          },
        ],
        workedExample: {
          problem: "Why is Venus too hot for life?",
          solution:
            "Venus's thick CO2 atmosphere creates a runaway greenhouse effect, trapping heat and raising surface temperature to ~460°C.",
        },
      },
      questions: [
        {
          id: "s7-u8-habitable-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the habitable zone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The region where life definitely exists" },
              { id: "b", text: "The region where liquid water can exist" },
              { id: "c", text: "The hottest part of a planet" },
              { id: "d", text: "The orbit of Earth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habitable zone",
                statement: "Region where conditions allow liquid water.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The habitable zone is where temperatures allow liquid water, essential for life.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Region where liquid water can exist.",
            commonErrors: ["Saying it's where life is guaranteed."],
          },
        },
        {
          id: "s7-u8-habitable-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three conditions that make Earth suitable for life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earth's advantages",
                statement:
                  "Right distance, atmosphere, magnetic field, liquid water.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Distance from Sun allows liquid water (habitable zone).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Atmosphere with oxygen and greenhouse gases regulates temperature.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Magnetic field protects from solar radiation.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Right distance, atmosphere, magnetic field, liquid water.",
            commonErrors: ["Listing only one condition."],
          },
        },
        {
          id: "s7-u8-habitable-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Venus has a runaway greenhouse effect while Earth does not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Greenhouse effect",
                statement: "Atmosphere traps heat; Venus's is extreme.",
              },
            ],
            steps: [
              {
                reasoning: "Venus has a very thick CO2 atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "CO2 traps infrared radiation, creating intense greenhouse effect.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Surface temperature reaches ~460°C, hot enough to melt lead.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Earth's atmosphere has less CO2 and other gases that allow heat to escape, maintaining balance.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Venus's thick CO2 atmosphere creates runaway greenhouse; Earth's is balanced.",
            commonErrors: [
              "Saying Venus is closer to the Sun (it's actually similar distance).",
            ],
          },
        },
        {
          id: "s7-u8-habitable-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare Earth, Mars and Venus in terms of habitability.",
          parts: [
            {
              label: "a",
              prompt: "Which is most Earth-like? Explain.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What does Mars lack compared to Earth?",
              marks: 2,
            },
            { label: "c", prompt: "Why is Venus uninhabitable?", marks: 2 },
            {
              label: "d",
              prompt: "What evidence suggests Mars once had liquid water?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Planetary habitability",
                statement:
                  "Earth most habitable; Mars possibly once; Venus uninhabitable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mars is most Earth-like — similar size, rocky, some water evidence.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Mars lacks thick atmosphere, liquid water on surface, magnetic field.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Venus has runaway greenhouse effect, surface ~460°C, crushing pressure.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Dry riverbeds, polar ice caps, mineral evidence of past water.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Mars most Earth-like (b) Thin atmosphere, no liquid water (c) Runaway greenhouse (d) Dry riverbeds, ice caps.",
            commonErrors: ["Saying Venus is cold like Mars."],
          },
        },
      ],
    },
    {
      id: "s7-u8-earth-history",
      title: "Earth's History and Formation",
      skill:
        "Describe how Earth formed, the early atmosphere, and major events in Earth's history.",
      lesson: {
        sections: [
          {
            heading: "Formation of Earth",
            body: "Earth formed about **4.54 billion years ago** from the solar nebula — a rotating cloud of gas and dust. Gravity pulled material together, forming a hot, molten planet. Over time, it cooled and differentiated into core, mantle and crust.",
          },
          {
            heading: "Early atmosphere and life",
            body: "The early atmosphere was mostly **carbon dioxide, water vapor and nitrogen** — no free oxygen. As the planet cooled, water condensed to form oceans. Life appeared about 3.5 billion years ago as simple bacteria; photosynthetic organisms later added oxygen to the atmosphere, enabling complex life.",
          },
          {
            heading: "Major events",
            body: "- **Heavy bombardment**: early asteroid impacts shaped the surface.\n- **First oceans**: formed ~4 billion years ago.\n- **First life**: ~3.5 billion years ago (prokaryotes).\n- **Great Oxidation Event**: ~2.4 billion years ago, oxygen rose.\n- **Complex life**: multicellular organisms ~600 million years ago.",
          },
        ],
        keyFormulas: [
          { name: "Earth's age", statement: "~4.54 billion years." },
          {
            name: "Early atmosphere",
            statement: "CO2, water vapor, nitrogen — no free oxygen.",
          },
          {
            name: "First life",
            statement: "~3.5 billion years ago, simple bacteria.",
          },
        ],
        workedExample: {
          problem: "How did oxygen first appear in Earth's atmosphere?",
          solution:
            "Photosynthetic bacteria (cyanobacteria) produced oxygen as a byproduct, gradually changing the atmosphere.",
        },
      },
      questions: [
        {
          id: "s7-u8-history-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how old is Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 million years" },
              { id: "b", text: "4.5 billion years" },
              { id: "c", text: "100 million years" },
              { id: "d", text: "10 billion years" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earth's age",
                statement: "~4.54 billion years.",
              },
            ],
            steps: [
              {
                reasoning: "Earth formed about 4.54 billion years ago.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4.5 billion years.",
            commonErrors: ["Confusing with age of universe (~13.8 billion)."],
          },
        },
        {
          id: "s7-u8-history-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was Earth's early atmosphere like?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Early atmosphere",
                statement: "CO2, water vapor, nitrogen — no free oxygen.",
              },
            ],
            steps: [
              {
                reasoning: "Mostly carbon dioxide and water vapor.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Some nitrogen; very little or no free oxygen.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "As planet cooled, water condensed to form oceans.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "CO2, water vapor, nitrogen — no free oxygen initially.",
            commonErrors: ["Saying early atmosphere was like today's."],
          },
        },
        {
          id: "s7-u8-history-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how oxygen appeared in Earth's atmosphere.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Great Oxidation Event",
                statement:
                  "Photosynthetic organisms added oxygen ~2.4 billion years ago.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cyanobacteria (photosynthetic bacteria) evolved ~3.5 billion years ago.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "They produced oxygen as a byproduct of photosynthesis.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Oxygen gradually accumulated in the atmosphere over hundreds of millions of years.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This enabled aerobic respiration and complex life.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Photosynthetic bacteria produced oxygen, gradually changing the atmosphere.",
            commonErrors: ["Saying plants were first; bacteria came first."],
          },
        },
        {
          id: "s7-u8-history-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a timeline of major events in Earth's history.",
          parts: [
            { label: "a", prompt: "When did Earth form?", marks: 2 },
            { label: "b", prompt: "When did oceans form?", marks: 2 },
            { label: "c", prompt: "When did first life appear?", marks: 2 },
            {
              label: "d",
              prompt: "When did oxygen appear in atmosphere?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earth's timeline",
                statement: "Formation → oceans → life → oxygen.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "~4.54 billion years ago.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "~4 billion years ago (water condensed).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "~3.5 billion years ago (simple bacteria).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "~2.4 billion years ago (Great Oxidation Event).",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) 4.54 bya (b) ~4 bya (c) ~3.5 bya (d) ~2.4 bya.",
            commonErrors: ["Putting oxygen before life."],
          },
        },
      ],
    },
  ],
};
