import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "phys12-u2-lesson-2-3",
  code: "2-3",
  title: "Kepler's Laws and Orbital Motion",
  goal: "I CAN apply Kepler's three laws to planetary and satellite orbits, and analyze orbital periods and speeds.",
  standards: ["HS-PS2-4"],
  vocabulary: [
    { term: "Kepler's first law", definition: "Orbits are ellipses with the central body at one focus." },
    { term: "Kepler's second law", definition: "A line from planet to Sun sweeps equal areas in equal times; planets move faster at perihelion." },
    { term: "Kepler's third law", definition: "The square of the orbital period is proportional to the cube of the semi-major axis: $T^2 \\propto a^3$." },
    { term: "Semi-major axis", definition: "Half the longest diameter of an elliptical orbit." },
    { term: "Perihelion", definition: "Closest point of an orbit to the central body." },
    { term: "Aphelion", definition: "Farthest point of an orbit from the central body." },
    { term: "Orbital period", definition: "Time for one complete orbit." },
  ],
  concepts: [
    {
      id: "phys12-u2-kepler-laws",
      title: "Kepler's three laws",
      skill: "State and apply Kepler's laws to describe and calculate orbital motion.",
      lesson: {
        sections: [
          {
            heading: "First law: ellipses",
            body: "Kepler's first law states that planets move in **elliptical orbits** with the Sun at one focus — not perfect circles. Earth's orbit is nearly circular (eccentricity ~0.017), but comets have very elongated ellipses.",
          },
          {
            heading: "Second law: equal areas",
            body: "Kepler's second law states that a line from the planet to the Sun sweeps out **equal areas in equal times**. This means planets move faster when closer to the Sun (perihelion) and slower when farther (aphelion). This is conservation of angular momentum in action.",
          },
          {
            heading: "Third law: T² ∝ a³",
            body: `Kepler's third law relates orbital period $T$ to semi-major axis $a$:

$$T^2 = \\frac{4\\pi^2}{GM}a^3$$

For objects orbiting the same central body, $T^2 \\propto a^3$. This applies to planets around the Sun and satellites around Earth.`,
          },
        ],
        keyFormulas: [
          { name: "Kepler's third law", statement: "$T^2 = (4\\pi^2/GM)a^3$" },
          { name: "Same body", statement: "$T^2 \\propto a^3$" },
        ],
        workedExample: {
          problem: "Earth orbits the Sun at $a = 1.50 \\times 10^{11}$ m with period 365 days. What is the period of Mars at $a = 2.28 \\times 10^{11}$ m?",
          solution: "$T_M^2/T_E^2 = (a_M/a_E)^3$, so $T_M = T_E \\times (a_M/a_E)^{3/2} = 365 \\times (2.28/1.50)^{3/2} = 365 \\times (1.52)^{1.5} = 365 \\times 1.874 = 684$ days ≈ 1.87 Earth years.",
        },
      },
      questions: [
        {
          id: "phys12-u2-kepler-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What shape are planetary orbits according to Kepler's first law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect circles" },
              { id: "b", text: "Ellipses" },
              { id: "c", text: "Parabolas" },
              { id: "d", text: "Hyperbolas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Kepler's first law", statement: "Orbits are ellipses with Sun at one focus." }],
            steps: [{ reasoning: "Kepler's first law states orbits are ellipses.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Ellipses",
            commonErrors: ["Thinking orbits are perfect circles."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u2-kepler-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A satellite orbits Earth with period 24 hours at radius 42,164 km. What is the period of a satellite at half that radius (21,082 km)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Kepler's third law", statement: "$T^2 \\propto a^3$" }],
            steps: [
              { reasoning: "$T_2/T_1 = (a_2/a_1)^{3/2} = (0.5)^{3/2} = 0.354$.", marks: 1, markCode: "M" },
              { reasoning: "$T_2 = 24 \\times 0.354 = 8.49$ hours.", working: "T=24*0.354=8.49", marks: 1, markCode: "M" },
              { reasoning: "Period ≈ 8.5 hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8.5 hours",
            commonErrors: ["Using linear relationship.", "Forgetting the 3/2 power."],
            examinerNote: "M1 ratio, M1 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u2-kepler-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Earth orbits the Sun in 365 days at 1 AU. Using Kepler's third law, calculate the orbital period of a planet at 4 AU.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Kepler's third law", statement: "$T^2 \\propto a^3$ for same central body." }],
            steps: [
              { reasoning: "$T^2/T_E^2 = (a/a_E)^3 = (4/1)^3 = 64$.", marks: 1, markCode: "M" },
              { reasoning: "$T = T_E \\times \\sqrt{64} = 365 \\times 8 = 2920$ days.", working: "T=365*8=2920", marks: 1, markCode: "M" },
              { reasoning: "2920 days ≈ 8 Earth years.", marks: 1, markCode: "A" },
              { reasoning: "This is consistent with Jupiter's actual ~11.9 year period at 5.2 AU.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "2920 days ≈ 8 years",
            commonErrors: ["Using $a^3$ without square root for T.", "Confusing period with distance."],
            examinerNote: "M1 setup, M1 calculation, A1 answer, R1 context.",
          },
        },
        {
          id: "phys12-u2-kepler-laws-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Halley's Comet has orbital period 76 years and semi-major axis 17.8 AU. Earth has period 1 year at 1 AU.",
          parts: [
            { label: "a", prompt: "Verify Kepler's third law using Earth's orbit as reference.", marks: 3 },
            { label: "b", prompt: "Calculate the comet's semi-major axis in meters (1 AU = 1.50×10¹¹ m).", marks: 2 },
            { label: "c", prompt: "If the comet's perihelion is 0.59 AU, calculate its aphelion.", marks: 3 },
            { label: "d", prompt: "Explain why the comet moves much faster at perihelion than aphelion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Kepler's third law", statement: "$T^2 \\propto a^3$" },
              { kind: "principle", name: "Kepler's second law", statement: "Equal areas in equal times → faster at perihelion." },
            ],
            steps: [
              { reasoning: "$a^3 = T^2$ in AU units: $a = T^{2/3} = 76^{2/3}$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$76^{2/3} = (76^2)^{1/3} = 5776^{1/3} \\approx 17.9$ AU — matches given 17.8 AU.", working: "a=76^(2/3)=17.9", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Kepler's third law verified: $T^2 = a^3$ holds (76² ≈ 17.9³).", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$a = 17.8 \\times 1.50 \\times 10^{11} = 2.67 \\times 10^{12}$ m.", working: "a=17.8*1.50e11=2.67e12", marks: 2, markCode: "M", part: "b" },
              { reasoning: "For ellipse: $2a = r_p + r_a$, so $r_a = 2a - r_p = 2(17.8) - 0.59 = 35.6 - 0.59 = 35.0$ AU.", working: "ra=2*17.8-0.59=35.0", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: ≈ 35 AU.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Kepler's second law: equal areas in equal times means the comet must move faster when closer to the Sun to sweep the same area.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "This is also conservation of angular momentum: smaller r requires larger v.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) verified (b) 2.67×10¹² m (c) 35 AU (d) Kepler's 2nd law / angular momentum.",
            commonErrors: ["Forgetting 2a = rp + ra.", "Thinking comets move at constant speed."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u2-orbital-motion",
      title: "Orbital motion and satellites",
      skill: "Analyze circular orbits, escape velocity, and satellite motion using gravitation and centripetal force.",
      lesson: {
        sections: [
          {
            heading: "Circular orbits",
            body: `For a satellite in circular orbit, gravity provides the centripetal force:

$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

Solving for orbital speed: $v = \\sqrt{GM/r}$.

For Earth, $v = \\sqrt{3.98 \\times 10^{14}/r}$ where r is distance from Earth's center.`,
          },
          {
            heading: "Orbital period",
            body: `The orbital period follows from $v = 2\\pi r/T$:

$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

This is Kepler's third law for circular orbits. Geostationary satellites have $T = 24$ hours and orbit at $r = 42,164$ km from Earth's center.`,
          },
          {
            heading: "Escape velocity",
            body: `The **escape velocity** is the minimum speed to escape a body's gravity entirely:

$$v_{esc} = \\sqrt{\\frac{2GM}{R}}$$

For Earth, $v_{esc} = 11.2$ km/s. This is $\\sqrt{2}$ times the orbital speed at the surface ($7.9$ km/s).`,
          },
        ],
        keyFormulas: [
          { name: "Orbital speed", statement: "$v = \\sqrt{GM/r}$" },
          { name: "Orbital period", statement: "$T = 2\\pi\\sqrt{r^3/GM}$" },
          { name: "Escape velocity", statement: "$v_{esc} = \\sqrt{2GM/R}$" },
        ],
        workedExample: {
          problem: "Calculate the orbital speed of the ISS at altitude 400 km (r = 6770 km from Earth's center).",
          solution: "$v = \\sqrt{GM/r} = \\sqrt{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})/(6.77 \\times 10^6)} = \\sqrt{5.88 \\times 10^{13}} = 7667$ m/s ≈ 7.7 km/s.",
        },
      },
      questions: [
        {
          id: "phys12-u2-orbital-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force provides the centripetal force for a satellite in orbit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rocket thrust" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Air resistance" },
              { id: "d", text: "Magnetic force" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbital motion", statement: "Gravity provides centripetal force." }],
            steps: [{ reasoning: "Gravitational attraction provides the centripetal force keeping satellites in orbit.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Gravity",
            commonErrors: ["Thinking satellites need continuous thrust."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u2-orbital-motion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is Earth's escape velocity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7.9 km/s" },
              { id: "b", text: "11.2 km/s" },
              { id: "c", text: "3.0×10⁸ m/s" },
              { id: "d", text: "2.0 km/s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Escape velocity", statement: "$v_{esc} = \\sqrt{2GM/R} = 11.2$ km/s for Earth." }],
            steps: [{ reasoning: "Earth's escape velocity is approximately 11.2 km/s.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 11.2 km/s",
            commonErrors: ["Confusing orbital speed (7.9) with escape velocity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u2-orbital-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A satellite orbits Earth at radius 8000 km. Calculate its orbital speed and period.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Orbital speed", statement: "$v = \\sqrt{GM/r}$" },
              { kind: "formula", name: "Orbital period", statement: "$T = 2\\pi r/v$" },
            ],
            steps: [
              { reasoning: "$v = \\sqrt{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})/(8.0 \\times 10^6)} = \\sqrt{4.98 \\times 10^{13}} = 7057$ m/s.", working: "v=7057", marks: 1, markCode: "M" },
              { reasoning: "v ≈ 7.06 km/s.", marks: 1, markCode: "A" },
              { reasoning: "$T = 2\\pi r/v = 2\\pi(8.0 \\times 10^6)/7057 = 7123$ s.", working: "T=2pi*8e6/7057=7123", marks: 1, markCode: "M" },
              { reasoning: "T ≈ 7120 s ≈ 1.98 hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "v ≈ 7.06 km/s; T ≈ 1.98 hours",
            commonErrors: ["Using altitude instead of distance from center.", "Forgetting 2π in period."],
            examinerNote: "M1 v, A1 v, M1 T, A1 T.",
          },
        },
        {
          id: "phys12-u2-orbital-motion-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A geostationary satellite orbits Earth at radius 42,164 km with period 24 hours.",
          parts: [
            { label: "a", prompt: "Calculate its orbital speed.", marks: 2 },
            { label: "b", prompt: "Calculate the centripetal acceleration at this orbit.", marks: 2 },
            { label: "c", prompt: "Compare this acceleration to Earth's surface g.", marks: 2 },
            { label: "d", prompt: "Explain why the satellite appears stationary relative to Earth's surface.", marks: 2 },
            { label: "e", prompt: "Calculate the escape velocity from this orbit.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Orbital speed", statement: "$v = 2\\pi r/T$" },
              { kind: "formula", name: "Centripetal acceleration", statement: "$a = v^2/r$" },
            ],
            steps: [
              { reasoning: "$v = 2\\pi(4.2164 \\times 10^7)/(24 \\times 3600) = 2\\pi(4.2164 \\times 10^7)/86400 = 3066$ m/s.", working: "v=2pi*4.2164e7/86400=3066", marks: 1, markCode: "M", part: "a" },
              { reasoning: "v ≈ 3.07 km/s.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$a = v^2/r = (3066)^2/(4.2164 \\times 10^7) = 9.40 \\times 10^6/4.22 \\times 10^7 = 0.223$ m/s².", working: "a=v^2/r=0.223", marks: 1, markCode: "M", part: "b" },
              { reasoning: "a ≈ 0.22 m/s².", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Ratio: 0.223/9.81 = 0.0227 — about 2.3% of surface g.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "The satellite's acceleration is much smaller than surface g because it's far from Earth.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "The satellite's orbital period equals Earth's rotation period (24 h) and it orbits in the equatorial plane, so it stays over the same point on Earth's surface.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "This is why it's called 'geostationary' — stationary relative to ground.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Escape velocity at orbit: $v_{esc} = \\sqrt{2GM/r} = \\sqrt{2} \\times v_{orbital} = \\sqrt{2} \\times 3066 = 4336$ m/s.", working: "vesc=sqrt(2)*3066=4336", marks: 1, markCode: "M", part: "e" },
              { reasoning: "v_esc ≈ 4.34 km/s.", marks: 1, markCode: "A", part: "e" },
            ],
            finalAnswer: "(a) 3.07 km/s (b) 0.22 m/s² (c) 2.3% of surface g (d) period = Earth's rotation (e) 4.34 km/s.",
            commonErrors: ["Using altitude instead of orbital radius.", "Confusing escape velocity with orbital speed."],
            examinerNote: "2+2+2+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
