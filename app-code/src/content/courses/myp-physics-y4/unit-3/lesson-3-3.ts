import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypp4-u3-lesson-3-3",
  code: "3-3",
  title: "Space Physics and Orbits",
  goal: "I CAN explain gravity, orbital motion, and how astronomers study space.",
  standards: [
    "Key concept: Space",
    "MYP Sciences: Space",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Gravity", definition: "Attractive force between masses; $F = Gm_1m_2/r^2$; weight $W = mg$." },
    { term: "Orbit", definition: "Path of an object around a larger body; balance of gravity and inertia." },
    { term: "Geostationary orbit", definition: "Orbit at ~36 000 km where period = 24 h; satellite stays above same point." },
    { term: "Escape velocity", definition: "Speed needed to escape a body's gravity without propulsion." },
    { term: "Telescope", definition: "Instrument collecting EM radiation; refracting (lenses) or reflecting (mirrors)." },
    { term: "Satellite", definition: "Object orbiting Earth: communication, weather, GPS, scientific." },
  ],
  concepts: [
    {
      id: "mypp4-u3-gravity",
      title: "Gravity and orbits",
      skill: "Explain gravitational force, weight, and orbital motion.",
      lesson: {
        sections: [
          {
            heading: "Gravity",
            body: "Every mass attracts every other: $F = G\\frac{m_1 m_2}{r^2}$. On Earth's surface weight $W = mg$ with $g = 9.8$ N/kg. Gravity decreases with distance squared — weak but acts over vast space.",
          },
          {
            heading: "Orbital motion",
            body: "A satellite in orbit is continuously falling toward Earth but moving fast enough sideways that it misses. Circular orbit: gravity provides centripetal force; speed depends on altitude.",
          },
          {
            heading: "Escape and orbits",
            body: "To escape Earth's gravity needs ~11.2 km/s. Geostationary satellites at 36 000 km match Earth's rotation — used for TV, weather. Lower orbits (LEO) for imaging, GPS.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "$F = G\\frac{m_1m_2}{r^2}$" },
          { name: "Weight", statement: "$W = mg$ N" },
          { name: "Geostationary", statement: "Period = 24 h at ~36 000 km" },
        ],
        workedExample: {
          problem: "Why doesn't a satellite fall to Earth?",
          solution: "It falls continuously but its sideways speed keeps it missing Earth — orbit.",
        },
      },
      questions: [
        {
          id: "mypp4-u3-grav-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force keeps the Moon in orbit around Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Inertia alone" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "Magnetism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gravity", statement: "Gravity provides centripetal force for orbits." }],
            steps: [
              { reasoning: "Earth's gravity pulls Moon toward centre.", working: "\\text{gravity}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Gravity",
            commonErrors: ["Thinking inertia alone keeps it up."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-grav-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the approximate escape velocity from Earth's surface?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11.2 km/s" },
              { id: "b", text: "300 000 km/s" },
              { id: "c", text: "1.1 km/s" },
              { id: "d", text: "7.9 km/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Escape velocity", statement: "~11.2 km/s needed to leave Earth's gravity." }],
            steps: [
              { reasoning: "Escape velocity for Earth is about 11.2 km/s.", working: "11.2\\ \\text{km/s}", marks: 1, markCode: "M" },
              { reasoning: "State value.", working: "\\text{11.2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11.2 km/s",
            commonErrors: ["Confusing with orbital speed 7.9 km/s."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A satellite orbits Earth at 800 km altitude. Why can't it be seen from the same spot on Earth all the time (unlike geostationary)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clouds block it" },
              { id: "b", text: "Its orbital period is shorter than 24 hours" },
              { id: "c", text: "It orbits in the opposite direction" },
              { id: "d", text: "It is too small to see" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbit period", statement: "Lower orbit → shorter period → moves relative to Earth." }],
            steps: [
              { reasoning: "At 800 km the orbital period is ~100 min, not 24 h.", working: "\\sim100\\ \\text{min}", marks: 1, markCode: "M" },
              { reasoning: "Satellite moves faster than Earth's rotation → changes position in sky.", working: "\\text{moves}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a)",
            commonErrors: ["Thinking all satellites are geostationary."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A communications satellite must stay above the same point on Earth's equator.",
          parts: [
            { label: "a", prompt: "What type of orbit is required?", marks: 1 },
            { label: "b", prompt: "State its altitude and orbital period.", marks: 2 },
            { label: "c", prompt: "Explain why this orbit is useful for TV broadcasting.", marks: 2 },
            { label: "d", prompt: "Compare with a low Earth orbit (LEO) satellite used for imaging — give one advantage of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geostationary", statement: "Period = 24 h, stays above same point." },
              { kind: "principle", name: "Orbit trade-offs", statement: "GEO: coverage; LEO: resolution/latency." },
            ],
            steps: [
              { part: "a", reasoning: "Geostationary orbit.", working: "\\text{geostationary}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Altitude ≈ 36 000 km.", working: "36000\\ \\text{km}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Period = 24 h matching Earth's rotation.", working: "24\\ \\text{h}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Dish can point once and stay locked — continuous coverage.", working: "\\text{fixed pointing}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Covers large area of Earth.", working: "\\text{wide coverage}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "GEO advantage: constant position, wide coverage.", working: "\\text{GEO:coverage}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "LEO advantage: closer → sharper images, lower latency.", working: "\\text{LEO:resolution}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "One valid advantage for each.", working: "\\text{both}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) geostationary (b) 36 000 km, 24 h (c) fixed pointing, wide coverage (d) GEO: coverage; LEO: resolution/latency",
            commonErrors: ["Forgetting geostationary must be equatorial."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u3-grav-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The weight of an object on a planet is calculated using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$W = mg$" },
              { id: "b", text: "$F = ma$" },
              { id: "c", text: "$E_k = \\frac{1}{2}mv^2$" },
              { id: "d", text: "$p = mv$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Weight", statement: "Weight = mass × gravitational field strength: $W = mg$." }],
            steps: [
              { reasoning: "$W = mg$ gives weight.", working: "W=mg", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $W = mg$",
            commonErrors: ["Confusing with mass or momentum."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-grav-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 50 kg astronaut stands on the Moon, where $g = 1.6$ N/kg. Calculate their weight.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 80, unit: "N" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "W = mg", statement: "$W = 50 \\times 1.6$" }],
            steps: [
              { reasoning: "Apply $W = mg$.", working: "50\\times1.6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "80\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80 N",
            commonErrors: ["Using Earth's g = 9.8."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 10 kg mass weighs 25 N on an unknown planet. Calculate the gravitational field strength $g$ on that planet.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2.5, unit: "N/kg" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "W = mg", statement: "Rearrange: $g = W/m = 25/10$." }],
            steps: [
              { reasoning: "Rearrange $W = mg$ to $g = W/m$.", working: "g=\\frac{W}{m}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $g = 2.5$ N/kg.", working: "2.5\\ \\text{N/kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5 N/kg",
            commonErrors: ["Dividing mass by weight."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why doesn't a satellite in orbit fall to Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is continuously falling toward Earth but moving fast enough sideways to keep missing it" },
              { id: "b", text: "Its engines push it upwards constantly" },
              { id: "c", text: "The Moon's gravity cancels Earth's" },
              { id: "d", text: "There is no gravity in space" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbit", statement: "Orbit = balance of gravity (pulls inward) and inertia (tangential motion)." }],
            steps: [
              { reasoning: "Gravity pulls satellite inward; sideways velocity keeps it missing Earth.", working: "\\text{fall+miss}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** continuously falling but missing Earth",
            commonErrors: ["Thinking there's no gravity in orbit."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 60 kg person stands on Mars, where $g = 3.7$ N/kg. Calculate their weight on Mars.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 222, unit: "N" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "W = mg", statement: "$W = 60 \\times 3.7$" }],
            steps: [
              { reasoning: "Apply $W = mg$.", working: "60\\times3.7", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "222\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "222 N",
            commonErrors: ["Using Earth's g."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does the force of gravity between two objects decrease rapidly as their separation increases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity is a contact force" },
              { id: "b", text: "Air resistance cancels gravity" },
              { id: "c", text: "Gravitational force follows an inverse-square law: $F \\propto 1/r^2$" },
              { id: "d", text: "Objects lose mass with distance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's law of gravitation", statement: "$F = Gm_1m_2/r^2$ — force ∝ 1/r²." }],
            steps: [
              { reasoning: "Gravitational force depends on $1/r^2$ — doubles distance → quarter force.", working: "F\\propto\\frac{1}{r^2}", marks: 1, markCode: "M" },
              { reasoning: "Rapid decrease with distance is the inverse-square relationship.", working: "\\text{inverse-square}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** inverse-square law",
            commonErrors: ["Thinking gravity decreases linearly or not at all."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how gravity and inertia combine to keep a satellite in a circular orbit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Centripetal force", statement: "Gravity provides the inward force keeping satellite on curved path." },
              { kind: "principle", name: "Inertia", statement: "Satellite's tangential velocity carries it forward." },
            ],
            steps: [
              { reasoning: "Gravity pulls the satellite towards Earth's centre — the centripetal force.", working: "F_g\\text{ inward}", marks: 1, markCode: "M" },
              { reasoning: "The satellite's sideways velocity (inertia) makes it 'miss' Earth.", working: "v\\text{ sideways}", marks: 1, markCode: "M" },
              { reasoning: "Result: continuous fall around Earth = circular orbit.", working: "\\text{orbit}", marks: 1, markCode: "A" },
              { reasoning: "Speed must be exactly right — too slow falls, too fast escapes.", working: "\\text{right speed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravity pulls inward while inertia carries satellite forward → orbit",
            commonErrors: ["Saying there's no gravity in orbit."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the orbital period of a geostationary satellite?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 year" },
              { id: "b", text: "7 days" },
              { id: "c", text: "24 hours" },
              { id: "d", text: "90 minutes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Geostationary", statement: "Period matches Earth's rotation: 24 h." }],
            steps: [
              { reasoning: "Geostationary period = 24 h.", working: "24\\ \\text{h}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 24 hours",
            commonErrors: ["Confusing with LEO period (~90 min)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-grav-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A satellite in low Earth orbit completes one orbit every 45 minutes. How many orbits does it complete in 24 hours?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 32, unit: "orbits" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbit period", statement: "Orbits per day = 1440 ÷ period in minutes." }],
            steps: [
              { reasoning: "Convert 24 h to 1440 min; divide by 45.", working: "\\frac{1440}{45}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "32\\ \\text{orbits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32 orbits",
            commonErrors: ["Dividing 24 by 45 without converting units."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Astronauts in orbit are described as 'weightless'. Explain why they float inside the spacecraft.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Free fall", statement: "Spacecraft and contents fall toward Earth together at the same rate." },
              { kind: "principle", name: "Apparent weight", statement: "No normal reaction force → astronauts feel weightless." },
            ],
            steps: [
              { reasoning: "Both spacecraft and astronaut are in free fall toward Earth.", working: "\\text{free fall}", marks: 1, markCode: "M" },
              { reasoning: "They accelerate at the same rate → no relative motion between them.", working: "\\text{same }a", marks: 1, markCode: "M" },
              { reasoning: "No surface pushes back on the astronaut → apparent weightlessness.", working: "\\text{no reaction}", marks: 1, markCode: "A" },
              { reasoning: "Gravity still acts — it's the shared free fall that creates the effect.", working: "\\text{gravity acts}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spacecraft and astronaut free-fall together → no normal force → weightless",
            commonErrors: ["Thinking gravity is zero in orbit."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u3-grav-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A communications company must choose an orbit for a new satellite.",
          parts: [
            { label: "a", prompt: "State one advantage of a geostationary orbit for TV broadcasting.", marks: 2 },
            { label: "b", prompt: "State one advantage of a low Earth orbit for imaging.", marks: 1 },
            { label: "c", prompt: "Recommend an orbit for a weather-monitoring satellite that must see the whole Earth disc and justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Orbit trade-offs", statement: "GEO: fixed position, wide coverage; LEO: closer, better resolution." },
              { kind: "principle", name: "Application", statement: "Choose orbit matching mission requirements." },
            ],
            steps: [
              { part: "a", reasoning: "Stays above same point → dishes point once, continuous coverage.", working: "\\text{fixed position}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Wide coverage of Earth's surface.", working: "\\text{wide coverage}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Closer to Earth → sharper images / less latency.", working: "\\text{resolution}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Geostationary — sees whole Earth disc continuously.", working: "\\text{GEO}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fixed position + wide coverage (b) better resolution/latency (c) geostationary — whole-disc view",
            commonErrors: ["Choosing LEO for weather without justification."],
            examinerNote: "M1 A1 for (a), A1 for (b),(c).",
          },
        },
        {
          id: "mypp4-u3-grav-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which statement about the force of gravity between two masses is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases with the square of the distance between them" },
              { id: "b", text: "It only acts between objects touching each other" },
              { id: "c", text: "It is the same everywhere in the universe" },
              { id: "d", text: "It increases with the product of the masses and decreases with the square of the distance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's gravitation", statement: "$F = Gm_1m_2/r^2$." }],
            steps: [
              { reasoning: "Force ∝ product of masses $m_1m_2$.", working: "F\\propto m_1m_2", marks: 1, markCode: "M" },
              { reasoning: "Force ∝ $1/r^2$ — decreases with distance squared.", working: "F\\propto\\frac{1}{r^2}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** ∝ m₁m₂, ∝ 1/r²",
            commonErrors: ["Reversing the distance dependence."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u3-space",
      title: "Astronomy and space exploration",
      skill: "Describe how astronomers observe space and evaluate space missions.",
      lesson: {
        sections: [
          {
            heading: "Observing space",
            body: "Telescopes collect EM radiation: radio telescopes detect radio waves; optical telescopes use visible light; space telescopes (Hubble, JWST) avoid atmospheric distortion and detect IR/UV. Spectroscopy reveals composition.",
          },
          {
            heading: "Our Solar System",
            body: "Eight planets orbit the Sun: Mercury, Venus, Earth, Mars (rocky); Jupiter, Saturn, Uranus, Neptune (gas/ice giants). Asteroid belt between Mars and Jupiter; comets have icy tails near Sun.",
          },
          {
            heading: "Space missions",
            body: "Probes (Voyager, Cassini) study planets; rovers (Mars) explore surfaces; crewed missions (ISS, Artemis) enable research. Benefits: technology spin-offs, Earth monitoring, scientific discovery; challenges: cost, radiation, distance.",
          },
        ],
        keyFormulas: [
          { name: "Telescopes", statement: "Radio, optical, space-based" },
          { name: "Solar System", statement: "8 planets; rocky inner, giants outer" },
          { name: "Benefits", statement: "Tech spin-offs, Earth monitoring, science" },
        ],
        workedExample: {
          problem: "Why are space telescopes better than ground-based?",
          solution: "No atmospheric distortion, can detect wavelengths blocked by atmosphere (IR, UV, X-ray).",
        },
      },
      questions: [
        {
          id: "mypp4-u3-space-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many planets are in our Solar System?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "7" },
              { id: "c", text: "10" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "8 planets since Pluto reclassified 2006." }],
            steps: [
              { reasoning: "Eight planets orbit the Sun.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 8",
            commonErrors: ["Counting Pluto as planet."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-space-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What advantage does a space telescope have over a ground-based one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No atmospheric distortion and can detect wavelengths blocked by atmosphere" },
              { id: "b", text: "It's cheaper" },
              { id: "c", text: "It's closer to stars" },
              { id: "d", text: "It uses less power" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Space telescopes", statement: "Above atmosphere → clearer, broader spectrum." }],
            steps: [
              { reasoning: "Atmosphere distorts and absorbs radiation.", working: "\\text{atmosphere}", marks: 1, markCode: "M" },
              { reasoning: "Space telescopes avoid this.", working: "\\text{clear view}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clearer + broader wavelength range",
            commonErrors: ["Thinking cost is the advantage."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the main scientific benefit of sending rovers to Mars rather than only orbiters?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are cheaper" },
              { id: "b", text: "They orbit faster" },
              { id: "c", text: "They can take rock samples and test soil chemistry directly" },
              { id: "d", text: "They need no fuel" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Rovers", statement: "Surface access enables direct sampling and experiments." }],
            steps: [
              { reasoning: "Rovers reach surface — collect samples, analyse soil.", working: "\\text{surface access}", marks: 1, markCode: "M" },
              { reasoning: "Orbiters only see from above — less detail.", working: "\\text{remote only}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a)",
            commonErrors: ["Thinking orbiters can sample."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the benefits and challenges of crewed space missions compared to robotic probes.",
          parts: [
            { label: "a", prompt: "List two advantages of crewed missions.", marks: 2 },
            { label: "b", prompt: "List two challenges of crewed missions.", marks: 2 },
            { label: "c", prompt: "State two advantages of robotic probes.", marks: 2 },
            { label: "d", prompt: "Conclude which approach is more suitable for long-duration Mars missions and justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crewed vs robotic", statement: "Crewed: adaptability, complex tasks; robotic: cheaper, no risk." },
              { kind: "principle", name: "Evaluation", statement: "Trade-offs between capability and risk/cost." },
            ],
            steps: [
              { part: "a", reasoning: "Astronauts can adapt, repair, do complex tasks.", working: "\\text{adaptability}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Better for science × exploration combined.", working: "\\text{science}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "High cost and risk to human life.", working: "\\text{cost+risk}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Radiation, life support, psychological challenges.", working: "\\text{radiation}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cheaper and no risk to human life.", working: "\\text{safer}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Can be sent further, longer missions.", working: "\\text{longer}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Robotic first for reconnaissance; crewed for complex surface work.", working: "\\text{mixed}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justified conclusion.", working: "\\text{justified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) adaptability, complex tasks (b) cost, risk, radiation (c) safer, cheaper, longer missions (d) robots first, crewed for complex work",
            commonErrors: ["One-sided evaluation without balance."],
            examinerNote: "M1 A1 for each of (a),(b),(c), M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u3-space-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a gas giant planet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Venus" },
              { id: "b", text: "Mercury" },
              { id: "c", text: "Mars" },
              { id: "d", text: "Jupiter" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "Rocky inner planets; gas/ice giants outer." }],
            steps: [
              { reasoning: "Jupiter is a gas giant.", working: "\\text{Jupiter}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Jupiter",
            commonErrors: ["Confusing rocky and giant planets."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u3-space-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sunlight takes about 500 s to reach Earth ($1.5 \\times 10^{11}$ m). Calculate the approximate speed of light in m/s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 300000000, tolerance: 1000000, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Speed of light", statement: "$c = 3 \\times 10^8$ m/s." }],
            steps: [
              { reasoning: "Speed = distance ÷ time = $1.5 \\times 10^{11}/500$.", working: "\\frac{1.5\\times10^{11}}{500}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $3 \\times 10^8$ m/s.", working: "3\\times10^8\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 \\times 10^8$ m/s",
            commonErrors: ["Power-of-ten errors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A space probe travels at 20 km/s for 1 hour. Calculate the distance it covers.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 72000, unit: "km" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "s = vt", statement: "Distance = speed × time; convert 1 h to 3600 s." }],
            steps: [
              { reasoning: "Apply $s = 20 \\times 3600$.", working: "20\\times3600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: 72 000 km.", working: "72000\\ \\text{km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "72 000 km",
            commonErrors: ["Using 1 hour instead of 3600 s."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main advantage of a space telescope over a ground-based telescope?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is closer to the stars" },
              { id: "b", text: "No atmospheric distortion and access to wavelengths blocked by the atmosphere" },
              { id: "c", text: "It is cheaper to build" },
              { id: "d", text: "It needs no power" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Space telescopes", statement: "Above atmosphere → clearer images, broader spectrum." }],
            steps: [
              { reasoning: "Atmosphere distorts and absorbs EM radiation.", working: "\\text{atmosphere}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** no distortion, broader wavelengths",
            commonErrors: ["Thinking cost is the advantage."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A deep-space probe travels at 17 km/s. Calculate the distance it covers in 1000 s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 17000, unit: "km" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "s = vt", statement: "$s = 17 \\times 1000$" }],
            steps: [
              { reasoning: "Apply $s = vt$.", working: "17\\times1000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "17000\\ \\text{km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17 000 km",
            commonErrors: ["Multiplying wrong."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the main scientific benefit of sending rovers to Mars rather than only orbiters?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They orbit Mars faster" },
              { id: "b", text: "They can collect rock samples and test soil chemistry directly on the surface" },
              { id: "c", text: "They are cheaper to operate" },
              { id: "d", text: "They need no fuel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Rovers", statement: "Surface access enables direct sampling and experiments." }],
            steps: [
              { reasoning: "Rovers reach the surface — collect samples, analyse soil.", working: "\\text{surface access}", marks: 1, markCode: "M" },
              { reasoning: "Orbiters only observe remotely.", working: "\\text{remote}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (a).", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** direct surface sampling",
            commonErrors: ["Thinking orbiters can sample."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A radio signal takes about 20 minutes to travel from Earth to Mars. The speed of light is approximately $3 \\times 10^5$ km/s. Estimate the Earth–Mars distance.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 360000000, tolerance: 10000000, unit: "km" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "s = vt", statement: "Distance = speed × time; convert 20 min to 1200 s." }],
            steps: [
              { reasoning: "Convert 20 min to 1200 s.", working: "1200\\ \\text{s}", marks: 1, markCode: "M" },
              { reasoning: "Apply $s = 3 \\times 10^5 \\times 1200$.", working: "3\\times10^5\\times1200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $3.6 \\times 10^8$ km.", working: "3.6\\times10^8\\ \\text{km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.6 \\times 10^8$ km",
            commonErrors: ["Using minutes instead of seconds."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which instrument is specifically designed to detect radio waves from space?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio telescope" },
              { id: "b", text: "Seismometer" },
              { id: "c", text: "Barometer" },
              { id: "d", text: "Optical telescope" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Telescopes", statement: "Different telescopes detect different EM regions." }],
            steps: [
              { reasoning: "Radio telescopes detect radio waves.", working: "\\text{radio}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Radio telescope",
            commonErrors: ["Confusing telescope types."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-space-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A laser signal takes 2.5 s to make a round trip to the Moon and back. The speed of light is $3 \\times 10^5$ km/s. Calculate the one-way distance to the Moon.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 375000, tolerance: 10000, unit: "km" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Echo", statement: "Round trip = 2 × one-way distance." }],
            steps: [
              { reasoning: "Total distance = $3 \\times 10^5 \\times 2.5 = 7.5 \\times 10^5$ km; halve for one-way.", working: "\\frac{3\\times10^5\\times2.5}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: 375 000 km.", working: "375000\\ \\text{km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "375 000 km",
            commonErrors: ["Forgetting to halve the round-trip distance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits of space exploration for people living on Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spin-offs", statement: "Space technology creates useful everyday products." },
              { kind: "principle", name: "Monitoring", statement: "Satellites monitor weather, climate, communications." },
            ],
            steps: [
              { reasoning: "Technology developed for space has everyday uses (e.g. GPS, satellite comms, materials).", working: "\\text{spin-offs}", marks: 1, markCode: "M" },
              { reasoning: "Satellites provide weather forecasting and climate monitoring.", working: "\\text{weather}", marks: 1, markCode: "M" },
              { reasoning: "Scientific discovery — understanding of universe, planets, origins.", working: "\\text{science}", marks: 1, markCode: "A" },
              { reasoning: "Any two valid benefits explained.", working: "\\text{two benefits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. technology spin-offs, weather/climate monitoring, scientific discovery",
            commonErrors: ["Only listing benefits without explanation."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u3-space-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether the money spent on crewed space missions is worthwhile.",
          parts: [
            { label: "a", prompt: "State two potential benefits of crewed space missions.", marks: 2 },
            { label: "b", prompt: "State two drawbacks of crewed space missions.", marks: 1 },
            { label: "c", prompt: "Give a balanced conclusion.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "Weigh benefits against cost and risk." },
              { kind: "principle", name: "Crewed missions", statement: "Enable complex tasks but are costly and risky." },
            ],
            steps: [
              { part: "a", reasoning: "Astronauts can adapt, repair equipment, conduct complex experiments.", working: "\\text{adaptability}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Inspires science and international cooperation.", working: "\\text{inspiration}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Very expensive; risk to human life (radiation, accidents).", working: "\\text{cost+risk}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Worthwhile if balanced against robotic alternatives; justification either way acceptable.", working: "\\text{justified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) adaptability, complex tasks (b) cost, risk (c) justified conclusion either way",
            commonErrors: ["One-sided argument without acknowledging drawbacks."],
            examinerNote: "M1 A1 for (a), M1 for (b), A1 for (c).",
          },
        },
        {
          id: "mypp4-u3-space-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do comets develop bright tails only when they approach the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar heat vaporises ice and dust, which are then pushed by solar wind and radiation" },
              { id: "b", text: "The Sun's gravity pulls the tail out" },
              { id: "c", text: "The tail is made of molten rock" },
              { id: "d", text: "Comets catch fire near the Sun" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Comets", statement: "Icy bodies; solar heating vaporises material forming a tail blown by solar wind." }],
            steps: [
              { reasoning: "Heat near Sun vaporises ice/dust from the comet.", working: "\\text{vaporises}", marks: 1, markCode: "M" },
              { reasoning: "Solar wind and radiation pressure push material into a tail.", working: "\\text{solar wind}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** ice vaporised, pushed by solar wind",
            commonErrors: ["Thinking comets are made of fire or rock."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
