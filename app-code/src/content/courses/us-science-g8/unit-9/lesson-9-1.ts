import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "s8-u9-lesson-9-1",
  code: "9-1",
  title: "Gravity and Orbits",
  goal: "I CAN explain Newton's law of universal gravitation, describe orbital motion, and calculate gravitational force.",
  standards: [
    "MS-ESS1-1",
    "MS-ESS1-2",
    "SEP: Developing and Using Models",
    "SEP: Mathematical and Computational Thinking",
  ],
  vocabulary: [
    { term: "Gravity", definition: "Force of attraction between masses." },
    {
      term: "Newton's law of gravitation",
      definition: "$F = G\\frac{m_1 m_2}{r^2}$",
    },
    {
      term: "Orbital motion",
      definition: "Movement of object around another due to gravity.",
    },
    {
      term: "Escape velocity",
      definition: "Speed needed to escape gravitational pull.",
    },
    {
      term: "Weight vs mass",
      definition: "Weight = mass × gravity; varies by location.",
    },
    {
      term: "Inverse square law",
      definition: "Force decreases with distance squared.",
    },
    { term: "Tidal force", definition: "Gravity differential causing tides." },
  ],
  concepts: [
    {
      id: "s8-u9-gravity-law",
      title: "Newton's law of gravitation",
      skill: "Calculate gravitational force and understand its properties.",
      lesson: {
        sections: [
          {
            heading: "Universal gravitation",
            body: "Newton's law: $$F = G\\frac{m_1 m_2}{r^2}$$\n\nwhere $G = 6.67 \\times 10^{-11}$ N·m²/kg².\n\n- Force proportional to product of masses.\n- Force inversely proportional to distance squared.",
          },
          {
            heading: "Key properties",
            body: "- Gravity is always attractive.\n- Every mass attracts every other mass.\n- Force acts along line connecting centers of mass.\n- Doubling distance → force becomes 1/4.",
          },
        ],
        keyFormulas: [
          {
            name: "Gravitational force",
            statement: "$F = G\\frac{m_1 m_2}{r^2}$",
          },
          {
            name: "Inverse square",
            statement: "Double distance → quarter force.",
          },
          {
            name: "G constant",
            statement: "$6.67 \\times 10^{-11}$ N·m²/kg².",
          },
        ],
        workedExample: {
          problem:
            "Two 1 kg masses are 1 m apart. Calculate gravitational force.",
          solution:
            "$F = 6.67 \\times 10^{-11} \\times \\frac{1 \\times 1}{1^2} = 6.67 \\times 10^{-11}$ N.",
        },
      },
      questions: [
        {
          id: "s8-u9-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Newton's law of gravitation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$F = ma$" },
              { id: "b", text: "$F = G\\frac{m_1 m_2}{r^2}$" },
              { id: "c", text: "$F = mv$" },
              { id: "d", text: "$F = Gm$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gravitational force",
                statement: "$F = G\\frac{m_1 m_2}{r^2}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Force depends on masses and inverse square of distance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $F = G\\frac{m_1 m_2}{r^2}$.",
            commonErrors: ["Choosing (a): that's Newton's second law."],
          },
        },
        {
          id: "s8-u9-gravity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two 10 kg masses are 2 m apart. Calculate gravitational force ($G = 6.67 \\times 10^{-11}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gravitational force",
                statement: "$F = G\\frac{m_1 m_2}{r^2}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F = 6.67 \\times 10^{-11} \\times \\frac{10 \\times 10}{2^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= 6.67 \\times 10^{-11} \\times \\frac{100}{4} = 1.67 \\times 10^{-9}$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: $1.67 \\times 10^{-9}$ N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.67 \\times 10^{-9}$ N.",
            commonErrors: ["Calculation errors."],
          },
        },
        {
          id: "s8-u9-gravity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "If distance between two masses doubles, what happens to gravitational force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Inverse square law",
                statement: "Force ∝ 1/r².",
              },
            ],
            steps: [
              { reasoning: "$F \\propto 1/r^2$.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "If $r$ doubles: $F_{new} = F_{old} \\times (1/2)^2 = F_{old}/4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Force becomes 1/4 (75% decrease).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "This is the inverse square law.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Force becomes 1/4 of original.",
            commonErrors: ["Saying force halves."],
          },
        },
        {
          id: "s8-u9-gravity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Moon orbits Earth at average distance 384,000 km.",
          parts: [
            { label: "a", prompt: "What force keeps Moon in orbit?", marks: 2 },
            { label: "b", prompt: "Why doesn't Moon fall to Earth?", marks: 3 },
            {
              label: "c",
              prompt: "What happens if gravity suddenly stopped?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "How does orbital velocity relate to gravity?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbital motion",
                statement: "Gravity provides centripetal force for orbit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Earth's gravitational pull on Moon.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Moon's forward velocity balances gravity → continuous fall around Earth.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Moon would travel in straight line away from Earth.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Higher orbital velocity needed closer to planet (stronger gravity).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Gravity (b) Velocity balances gravity (c) Straight line (d) Closer = faster.",
            commonErrors: ["Saying Moon is stationary."],
          },
        },
      ],
    },
    {
      id: "s8-u9-orbits",
      title: "Orbital Motion and Kepler's Laws",
      skill:
        "Describe orbital motion, Kepler's laws, and how gravity governs planetary motion.",
      lesson: {
        sections: [
          {
            heading: "Orbital mechanics",
            body: "Orbits are elliptical paths around a central mass. Gravity provides centripetal force; object's inertia provides tendency to move straight.\n\n- **Faster orbit** = closer to planet = stronger gravity = higher speed.\n- **Slower orbit** = farther = weaker gravity = lower speed.",
          },
          {
            heading: "Kepler's laws",
            body: "1. **Law of ellipses**: planets orbit in ellipses with Sun at one focus.\n2. **Law of equal areas**: planets sweep equal areas in equal times (faster when closer).\n3. **Law of harmonics**: orbital period² ∝ distance³.",
          },
        ],
        keyFormulas: [
          {
            name: "Orbital motion",
            statement: "Gravity + inertia → elliptical orbits.",
          },
          {
            name: "Kepler's laws",
            statement: "Ellipses, equal areas, period-distance relationship.",
          },
          {
            name: "Orbital velocity",
            statement: "Closer = faster; farther = slower.",
          },
        ],
        workedExample: {
          problem: "Why does Mercury orbit faster than Neptune?",
          solution:
            "Mercury is closer to Sun → stronger gravity → higher orbital velocity.",
        },
      },
      questions: [
        {
          id: "s8-u9-orbits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What shape are planetary orbits?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect circles" },
              { id: "b", text: "Ellipses" },
              { id: "c", text: "Squares" },
              { id: "d", text: "Random paths" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbital shape",
                statement: "Ellipses with Sun at one focus.",
              },
            ],
            steps: [
              {
                reasoning: "Kepler's first law: orbits are ellipses.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Ellipses.",
            commonErrors: ["Choosing (a): circles are special ellipses."],
          },
        },
        {
          id: "s8-u9-orbits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State Kepler's three laws.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Kepler's laws",
                statement: "Ellipses, equal areas, harmonics.",
              },
            ],
            steps: [
              {
                reasoning: "Law 1: Orbits are ellipses.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Law 2: Equal areas in equal times.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Law 3: Period² ∝ distance³.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Ellipses, equal areas, period-distance relationship.",
            commonErrors: ["Missing a law."],
          },
        },
        {
          id: "s8-u9-orbits-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a planet move faster when closer to the Sun?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Kepler's second law",
                statement: "Equal areas → faster when closer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gravity stronger when closer → faster orbital velocity needed.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Kepler's second law: equal areas in equal times.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "To sweep equal area, planet must move faster when closer.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This is conservation of angular momentum.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Stronger gravity closer → faster velocity to maintain orbit.",
            commonErrors: ["Saying planet speeds up randomly."],
          },
        },
        {
          id: "s8-u9-orbits-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare orbits of inner and outer planets.",
          parts: [
            {
              label: "a",
              prompt: "Which has shorter orbital period?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which has higher orbital velocity?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Which experiences stronger gravity?",
              marks: 2,
            },
            { label: "d", prompt: "Why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbital comparison",
                statement: "Inner = faster, shorter period, stronger gravity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Inner planets have shorter periods.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Inner planets have higher orbital velocity.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Inner planets experience stronger gravity.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Closer to Sun → stronger gravity → faster needed velocity.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Inner (b) Inner (c) Inner (d) Closer = stronger gravity.",
            commonErrors: ["Reversing the relationships."],
          },
        },
      ],
    },
    {
      id: "s8-u9-seasons-moon",
      title: "Seasons, Moon Phases, and Eclipses",
      skill: "Explain Earth's seasons, Moon phases, and types of eclipses.",
      lesson: {
        sections: [
          {
            heading: "Seasons",
            body: "Earth's seasons are caused by **axial tilt** (23.5°), not distance from Sun:\n\n- **Summer**: hemisphere tilted toward Sun → more direct sunlight + longer days.\n- **Winter**: hemisphere tilted away → less direct sunlight + shorter days.\n- **Equinoxes**: equal day/night (March, September).\n- **Solstices**: longest/shortest days (June, December).",
          },
          {
            heading: "Moon phases and eclipses",
            body: "**Moon phases**: new → crescent → quarter → gibbous → full → gibbous → quarter → crescent → new.\n\n- **Lunar eclipse**: Earth's shadow on Moon (full moon).\n- **Solar eclipse**: Moon's shadow on Earth (new moon).",
          },
        ],
        keyFormulas: [
          {
            name: "Seasons",
            statement: "Axial tilt (23.5°) → uneven sunlight distribution.",
          },
          { name: "Moon phases", statement: "8 phases over ~29.5 days." },
          {
            name: "Eclipses",
            statement:
              "Lunar = Earth shadow on Moon; solar = Moon shadow on Earth.",
          },
        ],
        workedExample: {
          problem:
            "Why is it summer in Northern Hemisphere when Earth is farthest from Sun?",
          solution:
            "Seasons depend on axial tilt, not distance — Northern Hemisphere tilted toward Sun gets more direct sunlight.",
        },
      },
      questions: [
        {
          id: "s8-u9-seasons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes Earth's seasons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance from Sun" },
              { id: "b", text: "Axial tilt" },
              { id: "c", text: "Moon's gravity" },
              { id: "d", text: "Earth's rotation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Seasons",
                statement: "Axial tilt (23.5°) causes seasons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Seasons caused by axial tilt, not distance from Sun.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Axial tilt.",
            commonErrors: ["Choosing (a): common misconception."],
          },
        },
        {
          id: "s8-u9-seasons-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between solstice and equinox.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solstice vs equinox",
                statement:
                  "Solstice = extreme day length; equinox = equal day/night.",
              },
            ],
            steps: [
              {
                reasoning: "Solstice: longest/shortest day (June/December).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Equinox: equal day and night (March/September).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Both related to Earth's orbit and axial tilt.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Solstice = extreme day; equinox = equal day/night.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "s8-u9-seasons-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Northern and Southern Hemispheres have opposite seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Seasons",
                statement:
                  "Axial tilt → opposite hemispheres get opposite sunlight.",
              },
            ],
            steps: [
              {
                reasoning: "Earth's axis tilted 23.5° toward/away from Sun.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "When Northern tilts toward Sun: Northern summer, Southern winter.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "When Southern tilts toward Sun: Southern summer, Northern winter.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Opposite tilts → opposite seasons.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Opposite axial tilt → opposite seasons.",
            commonErrors: ["Saying both have same seasons."],
          },
        },
        {
          id: "s8-u9-seasons-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare lunar and solar eclipses.",
          parts: [
            { label: "a", prompt: "What causes each?", marks: 2 },
            { label: "b", prompt: "When do they occur?", marks: 2 },
            { label: "c", prompt: "What is shadowed?", marks: 2 },
            {
              label: "d",
              prompt: "Which is more dangerous to view?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Eclipses",
                statement:
                  "Lunar = Earth shadow on Moon; solar = Moon shadow on Earth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lunar: Earth between Sun and Moon. Solar: Moon between Sun and Earth.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Lunar: full moon. Solar: new moon.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Lunar: Moon in Earth's shadow. Solar: Earth in Moon's shadow.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Solar — looking at Sun can damage eyes.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Earth/Moon positions (b) Full/new moon (c) Moon/Earth shadowed (d) Solar.",
            commonErrors: ["Confusing the two eclipses."],
          },
        },
      ],
    },
  ],
};
