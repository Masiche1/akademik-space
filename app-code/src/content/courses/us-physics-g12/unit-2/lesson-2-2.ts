import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "phys12-u2-lesson-2-2",
  code: "2-2",
  title: "Universal Gravitation",
  goal: "I CAN apply Newton's law of universal gravitation to calculate gravitational forces, surface gravity, and orbital motion.",
  standards: ["HS-PS2-4"],
  vocabulary: [
    { term: "Universal gravitation", definition: "Every mass attracts every other mass with force $F = Gm_1m_2/r^2$." },
    { term: "Gravitational constant", definition: "$G = 6.67 \\times 10^{-11}$ N·m²/kg², the universal constant of gravitation." },
    { term: "Inverse-square law", definition: "Force decreases with the square of distance: doubling distance quarters the force." },
    { term: "Surface gravity", definition: "Acceleration due to gravity at a planet's surface: $g = GM/R^2$." },
    { term: "Orbital motion", definition: "Motion of an object around a gravitating body sustained by gravity as centripetal force." },
    { term: "Weight", definition: "Gravitational force on an object: $W = mg = GMm/R^2$." },
    { term: "Free-body diagram", definition: "Diagram showing all forces acting on an object." },
  ],
  concepts: [
    {
      id: "phys12-u2-gravitation-law",
      title: "Newton's law of gravitation",
      skill: "Calculate gravitational force between masses and apply the inverse-square relationship.",
      lesson: {
        sections: [
          {
            heading: "Universal gravitation",
            body: `Newton's law of universal gravitation states that every mass attracts every other mass:

$$F = G\\frac{m_1 m_2}{r^2}$$

where $G = 6.67 \\times 10^{-11}$ N·m²/kg², $m_1$ and $m_2$ are the masses, and $r$ is the distance between their centers.

The force is **attractive** and acts along the line joining the centers. It obeys Newton's third law: both masses experience equal and opposite forces.`,
          },
          {
            heading: "Inverse-square law",
            body: `The $1/r^2$ dependence means force drops rapidly with distance:
- Double the distance → force becomes 1/4
- Triple the distance → force becomes 1/9

This is why we don't feel the gravitational pull of distant mountains, even though they have large masses.`,
          },
          {
            heading: "Comparing forces",
            body: "Gravitational force depends on the PRODUCT of masses and INVERSELY on distance squared. Earth pulls on the Moon with the same force the Moon pulls on Earth (Newton's third law), but Earth's larger mass means it accelerates less.",
          },
        ],
        keyFormulas: [
          { name: "Gravitational force", statement: "$F = Gm_1m_2/r^2$" },
          { name: "G value", statement: "$G = 6.67 \\times 10^{-11}$ N·m²/kg²" },
          { name: "Inverse-square", statement: "Force ∝ 1/r²" },
        ],
        workedExample: {
          problem: "Calculate the gravitational force between two 1000 kg spheres separated by 1.0 m.",
          solution: "$F = (6.67 \\times 10^{-11})(1000)(1000)/(1.0)^2 = (6.67 \\times 10^{-11})(10^6) = 6.67 \\times 10^{-5}$ N — incredibly small, which is why we don't notice gravity between everyday objects.",
        },
      },
      questions: [
        {
          id: "phys12-u2-gravitation-law-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the gravitational constant G?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.67 \\times 10^{-11}$ N·m²/kg²" },
              { id: "b", text: "$9.81$ m/s²" },
              { id: "c", text: "$3.0 \\times 10^8$ m/s" },
              { id: "d", text: "$6.02 \\times 10^{23}$ mol⁻¹" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Gravitational constant", statement: "$G = 6.67 \\times 10^{-11}$ N·m²/kg²." }],
            steps: [{ reasoning: "G is the universal gravitational constant.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $6.67 \\times 10^{-11}$ N·m²/kg²",
            commonErrors: ["Confusing G with g."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys12-u2-gravitation-law-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The gravitational force between two masses is 8.0 N when they are 2.0 m apart. What is the force when they are 4.0 m apart (masses unchanged)?",
          response: { type: "numeric", parts: [{ label: "F", answer: 2, unit: "N" }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Inverse-square", statement: "F ∝ 1/r²; doubling distance quarters force." }],
            steps: [
              { reasoning: "Distance doubled (2→4 m), so force becomes $8.0/4 = 2.0$ N.", working: "F=8.0/4=2.0", marks: 2, markCode: "M" },
              { reasoning: "F = 2.0 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.0 N",
            commonErrors: ["Halving the force instead of quartering.", "Using linear relationship."],
            examinerNote: "M2 reasoning, A1 answer.",
          },
        },
        {
          id: "phys12-u2-gravitation-law-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Earth's mass is $5.97 \\times 10^{24}$ kg and its radius is $6.37 \\times 10^6$ m. Calculate the gravitational force on a 70 kg person standing on Earth's surface.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gravitational force", statement: "$F = GMm/R^2$" },
            ],
            steps: [
              { reasoning: "$F = (6.67 \\times 10^{-11})(5.97 \\times 10^{24})(70)/(6.37 \\times 10^6)^2$.", marks: 1, markCode: "M" },
              { reasoning: "Denominator: $(6.37 \\times 10^6)^2 = 4.06 \\times 10^{13}$.", working: "r^2=4.06e13", marks: 1, markCode: "M" },
              { reasoning: "Numerator: $(6.67 \\times 10^{-11})(5.97 \\times 10^{24})(70) = 2.79 \\times 10^{16}$.", working: "num=2.79e16", marks: 1, markCode: "M" },
              { reasoning: "$F = 2.79 \\times 10^{16}/4.06 \\times 10^{13} = 687$ N.", working: "F=687", marks: 1, markCode: "A" },
            ],
            finalAnswer: "687 N",
            commonErrors: ["Forgetting to square the radius.", "Using wrong units for G."],
            examinerNote: "M3 calculation, A1 answer. Accept 686-688 N.",
          },
        },
        {
          id: "phys12-u2-gravitation-law-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The Moon orbits Earth at an average distance of $3.84 \\times 10^8$ m. Earth's mass is $5.97 \\times 10^{24}$ kg and the Moon's mass is $7.35 \\times 10^{22}$ kg.",
          parts: [
            { label: "a", prompt: "Calculate the gravitational force between Earth and the Moon.", marks: 3 },
            { label: "b", prompt: "Calculate the Moon's centripetal acceleration toward Earth.", marks: 3 },
            { label: "c", prompt: "Calculate the Moon's orbital speed.", marks: 3 },
            { label: "d", prompt: "Explain why the Moon doesn't fall into Earth despite gravity pulling it.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gravitational force", statement: "$F = GMm/r^2$" },
              { kind: "formula", name: "Centripetal acceleration", statement: "$a = v^2/r$ or $a = F/m$" },
            ],
            steps: [
              { reasoning: "$F = (6.67 \\times 10^{-11})(5.97 \\times 10^{24})(7.35 \\times 10^{22})/(3.84 \\times 10^8)^2$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Numerator: $(6.67 \\times 10^{-11})(5.97 \\times 10^{24})(7.35 \\times 10^{22}) = 2.93 \\times 10^{37}$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$F = 2.93 \\times 10^{37}/1.47 \\times 10^{17} = 1.99 \\times 10^{20}$ N (numerator $(6.67 \\times 10^{-11})(5.97 \\times 10^{24})(7.35 \\times 10^{22})$, denominator $(3.84 \\times 10^8)^2$).", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Moon's centripetal acceleration: $a = F/M_{moon} = 1.99 \\times 10^{20}/7.35 \\times 10^{22} = 2.71 \\times 10^{-3}$ m/s².", working: "a=1.99e20/7.35e22=0.00271", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: 2.71×10⁻³ m/s².", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Orbital speed: $v = \\sqrt{GM/r} = \\sqrt{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})/(3.84 \\times 10^8)} = \\sqrt{1.04 \\times 10^{12}} = 1.02 \\times 10^3$ m/s ≈ 1020 m/s.", working: "v=sqrt(GM/r)=1020", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: ≈ 1020 m/s.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "The Moon's orbital velocity is tangential while gravity is radial; this combination produces circular orbit — gravity continuously changes direction of velocity without changing speed.", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 1.99×10²⁰ N (b) 2.71×10⁻³ m/s² (c) 1020 m/s (d) tangential velocity + radial gravity = orbit.",
            commonErrors: ["Forgetting to square distance.", "Using wrong mass in acceleration.", "Thinking Moon has no gravity effect."],
            examinerNote: "3+3+3+1 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u2-surface-gravity",
      title: "Surface gravity and weight",
      skill: "Relate gravitational force to g, weight, and how g varies with altitude and planet.",
      lesson: {
        sections: [
          {
            heading: "g from gravitation",
            body: `At Earth's surface, gravitational force provides the weight $W = mg$. Equating $mg = GMm/R^2$ gives:

$$g = \\frac{GM}{R^2}$$

This shows g depends on the planet's mass and radius, not on the object's mass. On the Moon, $g = 1.62$ m/s² because the Moon has less mass.`,
          },
          {
            heading: "g varies with altitude",
            body: "At altitude $h$ above surface, $g' = GM/(R+h)^2$. For small altitudes compared to $R$, g decreases slowly; for the ISS at 400 km, g is about 89% of surface value. This is why astronauts are nearly weightless — they're in free fall, not because g is zero.",
          },
          {
            heading: "Weight on other planets",
            body: "Weight $W = GMm/R^2$ varies by planet. On Mars ($g = 3.71$ m/s²), a 70 kg person weighs about 260 N instead of 687 N. This affects how astronauts move and how much thrust rockets need.",
          },
        ],
        keyFormulas: [
          { name: "Surface gravity", statement: "$g = GM/R^2$" },
          { name: "g at altitude", statement: "$g' = GM/(R+h)^2$" },
          { name: "Weight", statement: "$W = GMm/R^2 = mg$" },
        ],
        workedExample: {
          problem: "Calculate g on Mars where $M = 6.42 \\times 10^{23}$ kg and $R = 3.40 \\times 10^6$ m.",
          solution: "$g = (6.67 \\times 10^{-11})(6.42 \\times 10^{23})/(3.40 \\times 10^6)^2 = (4.28 \\times 10^{13})/(1.16 \\times 10^{13}) = 3.69$ m/s² — about 38% of Earth's g.",
        },
      },
      questions: [
        {
          id: "phys12-u2-surface-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Earth's surface gravity g?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9.81 m/s²" },
              { id: "b", text: "6.67×10⁻¹¹ N·m²/kg²" },
              { id: "c", text: "3.0×10⁸ m/s" },
              { id: "d", text: "1.6 m/s²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Surface gravity", statement: "$g \\approx 9.81$ m/s² on Earth." }],
            steps: [{ reasoning: "Standard value of g on Earth's surface.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 9.81 m/s²",
            commonErrors: ["Confusing g with G."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys12-u2-surface-gravity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A planet has twice Earth's mass but the same radius. What is its surface gravity compared to Earth's?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Surface gravity", statement: "$g = GM/R^2$" }],
            steps: [
              { reasoning: "$g \\propto M/R^2$; if M doubles and R stays same, g doubles.", marks: 1, markCode: "B" },
              { reasoning: "g_planet = 2 × 9.81 = 19.62 m/s².", marks: 1, markCode: "M" },
              { reasoning: "The planet's surface gravity is twice Earth's.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "g = 19.6 m/s² (twice Earth's)",
            commonErrors: ["Thinking g depends on object's mass.", "Forgetting R is squared."],
            examinerNote: "B1 proportionality, M1 value, A1 answer.",
          },
        },
        {
          id: "phys12-u2-surface-gravity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate g at an altitude of 400 km above Earth's surface. Earth's radius is 6370 km and surface g is 9.81 m/s².",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "g at altitude", statement: "$g' = g(R/(R+h))^2$" }],
            steps: [
              { reasoning: "$g' = g \\times (R/(R+h))^2 = 9.81 \\times (6370/(6370+400))^2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 9.81 \\times (6370/6770)^2 = 9.81 \\times (0.9409)^2 = 9.81 \\times 0.8853 = 8.68$ m/s².", working: "g'=9.81*(6370/6770)^2=8.68", marks: 2, markCode: "M" },
              { reasoning: "g' ≈ 8.68 m/s² — about 88% of surface value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8.68 m/s²",
            commonErrors: ["Using linear decrease instead of inverse-square.", "Forgetting to square the ratio."],
            examinerNote: "M1 setup, M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u2-surface-gravity-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You are designing a space elevator. The cable extends from Earth's surface (R = 6370 km) to geostationary orbit at 42,164 km from Earth's center.",
          parts: [
            { label: "a", prompt: "Calculate g at the surface.", marks: 1 },
            { label: "b", prompt: "Calculate g at geostationary orbit.", marks: 3 },
            { label: "c", prompt: "Calculate the ratio g_orbit/g_surface.", marks: 2 },
            { label: "d", prompt: "Explain why astronauts on the space station experience weightlessness even though g is still significant.", marks: 2 },
            { label: "e", prompt: "Calculate the weight of a 70 kg person on Mars where g = 3.71 m/s².", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surface gravity", statement: "$g = GM/R^2$" },
              { kind: "formula", name: "g at distance", statement: "$g' = GM/r^2$ for any distance r" },
            ],
            steps: [
              { reasoning: "$g_{surface} = 9.81$ m/s².", marks: 1, markCode: "B", part: "a" },
              { reasoning: "$g_{orbit} = g_{surface} \\times (R_{surface}/R_{orbit})^2 = 9.81 \\times (6370/42164)^2$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "$= 9.81 \\times (0.1511)^2 = 9.81 \\times 0.02283 = 0.224$ m/s².", working: "g=9.81*(6370/42164)^2=0.224", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer: ≈ 0.22 m/s².", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Ratio: $0.224/9.81 = 0.0228$ (about 2.3% of surface g).", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Answer: ≈ 0.023 or 2.3%.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Astronauts are in free fall — the spacecraft and occupants accelerate together at g, so no normal force acts on them (apparent weight = 0).", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Gravity is still present and provides the centripetal force for orbit.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "$W_{Mars} = mg = 70 \\times 3.71 = 259.7$ N ≈ 260 N.", working: "W=70*3.71=260", marks: 1, markCode: "M", part: "e" },
              { reasoning: "Answer: ≈ 260 N.", marks: 1, markCode: "A", part: "e" },
            ],
            finalAnswer: "(a) 9.81 m/s² (b) 0.22 m/s² (c) 2.3% (d) free fall → weightlessness (e) 260 N.",
            commonErrors: ["Thinking g is zero at orbit.", "Using linear decrease instead of inverse-square."],
            examinerNote: "1+3+2+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
