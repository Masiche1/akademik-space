import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eph11-u3-lesson-3-3",
  code: "3-3",
  title: "The Solar System, Stars and the Universe",
  goal: "I CAN describe orbits and calculate orbital speed, describe the life cycle of stars, and use red shift as evidence for the expanding universe.",
  standards: ["4PH1 8.1", "4PH1 8.2", "4PH1 8.3", "4PH1 8.5", "4PH1 8.6"],
  vocabulary: [
    { term: "Orbit", definition: "The curved path of an object around a star or planet, kept in place by the force of gravity." },
    { term: "Orbital speed", definition: "The speed of an object moving around its orbit, found from the distance of one orbit divided by the orbital period." },
    { term: "Nebula", definition: "A cloud of dust and gas, mostly hydrogen, from which stars form." },
    { term: "Main sequence", definition: "The long, stable stage of a star's life, during which hydrogen is fused into helium in its core." },
    { term: "Supernova", definition: "The explosion of a massive star at the end of its life, which spreads heavy elements into space." },
    { term: "Red shift", definition: "An increase in the wavelength of light from a distant galaxy that is moving away from us." },
    { term: "Big Bang theory", definition: "The theory that the universe began from a very small, hot, dense point about 13.8 billion years ago and has been expanding ever since." },
  ],
  concepts: [
    {
      id: "eph11-u3-solar-system-orbits",
      title: "The solar system, orbits and orbital speed",
      skill: "Describe the solar system and the forces that keep objects in orbit, and use $v = \\frac{2\\pi r}{T}$ to calculate orbital speed.",
      lesson: {
        sections: [
          {
            heading: "The solar system and orbits",
            body: "The **solar system** contains the Sun, eight planets, dwarf planets, moons, asteroids and comets. Planets orbit the Sun in nearly circular paths. Moons orbit planets, and artificial satellites orbit Earth.\n\nOrbits are kept by the force of **gravity**, which always acts towards the centre of the orbit. Gravity changes the direction of the velocity but not the speed, so an object in a circular orbit moves at constant speed while its velocity is always changing, and it is accelerating.\n\nPlanets further from the Sun have a **weaker** gravitational pull and longer orbits, so they move more slowly and have a longer orbital period. **Comets** follow very elongated (elliptical) orbits: they move fastest when close to the Sun and slowest when far away.\n\nA **geostationary** satellite has an orbital period of 24 hours, orbits above the equator and stays above the same point on Earth, which is useful for communications. Low **polar** orbits pass over both poles and are used for monitoring and mapping.",
          },
          {
            heading: "Orbital speed",
            body: "In one orbit an object travels the circumference of its orbit, $2\\pi r$, in one orbital period $T$. For a circular orbit:\n\n$$v = \\frac{2\\pi r}{T}$$\n\nwhere $v$ is the orbital speed in $\\text{m/s}$, $r$ is the orbital radius in metres (measured from the centre of the object being orbited) and $T$ is the orbital period in seconds.\n\nConvert times carefully: 1 hour $= 3600\\text{ s}$ and 1 day $= 86\\,400\\text{ s}$. Rearranging gives $T = \\frac{2\\pi r}{v}$ and $r = \\frac{vT}{2\\pi}$.",
          },
        ],
        keyFormulas: [
          { name: "Orbital speed", statement: "$v = \\frac{2\\pi r}{T}$" },
          { name: "Circumference of orbit", statement: "$\\text{distance in one orbit} = 2\\pi r$" },
          { name: "Time conversion", statement: "$1\\text{ day} = 86\\,400\\text{ s}$" },
        ],
        workedExample: {
          problem: "A satellite orbits Earth in a circular orbit of radius $7.0 \\times 10^{6}\\text{ m}$. One orbit takes $5400\\text{ s}$. Calculate its orbital speed to 2 significant figures.",
          solution: "$v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\times 7.0 \\times 10^{6}}{5400} = \\frac{4.398 \\times 10^{7}}{5400} = 8145\\text{ m/s}$. To 2 significant figures this is **$8100\\text{ m/s}$**.",
        },
      },
      questions: [
        {
          id: "eph11-u3-solar-system-orbits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which force keeps the planets in orbit around the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetic force" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Air resistance" },
              { id: "d", text: "Friction" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Gravity and orbits", statement: "Gravitational attraction towards the Sun provides the force that keeps a planet in orbit." },
            ],
            steps: [
              { reasoning: "The Sun's gravity pulls each planet towards it, changing the direction of the planet's velocity so that it follows a curved path.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Gravity",
            commonErrors: ["Choosing magnetic force because the Sun is a large, hot body.", "Choosing air resistance; space is almost a vacuum."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph11-u3-solar-system-orbits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The Earth orbits the Sun in a nearly circular orbit of radius $1.5 \\times 10^{11}\\text{ m}$. One orbit takes $3.15 \\times 10^{7}\\text{ s}$. Calculate the orbital speed of the Earth. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Orbital speed", answer: 29900, tolerance: 50, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Orbital speed", statement: "$v = \\frac{2\\pi r}{T}$" },
            ],
            steps: [
              { reasoning: "Substitute the radius and the orbital period into the equation.", working: "v = \\frac{2\\pi \\times 1.5 \\times 10^{11}}{3.15 \\times 10^{7}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the numerator: $2\\pi \\times 1.5 \\times 10^{11} = 9.42 \\times 10^{11}\\text{ m}$.", working: "\\frac{9.42 \\times 10^{11}}{3.15 \\times 10^{7}}", marks: 1, markCode: "M" },
              { reasoning: "Divide and round to 3 significant figures.", working: "v = 2.99 \\times 10^{4} \\approx 29\\,900\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$29\\,900\\text{ m/s}$ (about $30\\text{ km/s}$)",
            commonErrors: ["Forgetting the factor $2\\pi$ and giving about $4760\\text{ m/s}$.", "Using the radius as the distance for one orbit."],
            examinerNote: "A1 for 29 900 or 3.0 x 10^4. Allow 29 800 to 30 000.",
          },
        },
        {
          id: "eph11-u3-solar-system-orbits-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A satellite orbits Earth at a constant speed of $7600\\text{ m/s}$. One orbit takes $5400\\text{ s}$. Calculate the radius of its orbit, from the centre of the Earth. Give your answer in metres to 2 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Orbital radius", answer: 6500000, tolerance: 50000, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Orbital speed", statement: "$v = \\frac{2\\pi r}{T}$, so $r = \\frac{vT}{2\\pi}$" },
            ],
            steps: [
              { reasoning: "Rearrange the orbital speed equation to make $r$ the subject.", working: "r = \\frac{vT}{2\\pi}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "r = \\frac{7600 \\times 5400}{2\\pi} = \\frac{4.104 \\times 10^{7}}{6.283}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to 2 significant figures.", working: "r = 6.53 \\times 10^{6} \\approx 6.5 \\times 10^{6}\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.5 \\times 10^{6}\\text{ m}$",
            commonErrors: ["Multiplying by $2\\pi$ instead of dividing, giving about $2.6 \\times 10^{8}\\text{ m}$.", "Forgetting to divide by $2\\pi$ and giving $4.1 \\times 10^{7}\\text{ m}$."],
            examinerNote: "A1 for 6.5 x 10^6. Allow 6.4 x 10^6 to 6.6 x 10^6. Allow ecf for a rearrangement error carried through.",
          },
        },
        {
          id: "eph11-u3-solar-system-orbits-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Earth orbits the Sun in an almost circular orbit of radius $1.5 \\times 10^{11}\\text{ m}$. Neptune orbits the Sun at a radius of $4.5 \\times 10^{12}\\text{ m}$. Halley's comet follows a very elongated orbit around the Sun.",
          parts: [
            { label: "a", prompt: "Name the force that keeps the Earth in orbit and state its direction.", marks: 2 },
            { label: "b", prompt: "Calculate the number of seconds in 365 days. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Calculate the distance that the Earth travels in one orbit. Give your answer to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Neptune moves more slowly than Earth and takes much longer to complete an orbit. Explain why.", marks: 2 },
            { label: "e", prompt: "Describe how the speed of Halley's comet changes as it moves from far away to close to the Sun.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Gravity and orbits", statement: "Gravity acts towards the centre of the orbit and gives the force that keeps an object in orbit." },
              { kind: "formula", name: "Orbit distance", statement: "$\\text{distance} = 2\\pi r$" },
              { kind: "principle", name: "Orbit speed and radius", statement: "The further from the Sun, the weaker the gravitational pull, the lower the orbital speed, and the longer the orbital period." },
            ],
            steps: [
              { part: "a", reasoning: "The force is gravity (gravitational attraction between the Sun and the Earth).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "It acts towards the Sun, the centre of the orbit.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply days by hours per day and seconds per hour.", working: "365 \\times 24 \\times 3600", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate: $31\\,536\\,000$, rounded to 3 significant figures.", working: "3.15 \\times 10^{7}\\text{ s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The distance in one orbit is the circumference.", working: "2\\pi \\times 1.5 \\times 10^{11}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round.", working: "9.42 \\times 10^{11}\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Neptune is much further from the Sun, so the gravitational pull on it is weaker, so it has a lower orbital speed.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It also has a much longer path to travel (a larger circumference), so one orbit takes much longer.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The comet speeds up as it approaches the Sun and is fastest when closest to it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) gravity, towards the Sun (b) $3.15 \\times 10^{7}\\text{ s}$ (c) $9.42 \\times 10^{11}\\text{ m}$ (d) weaker gravity and a longer path (e) it speeds up",
            commonErrors: ["Using $24 \\times 365 = 8760$ and forgetting to multiply by 3600.", "Using $\\pi r$ or $2r$ for the orbit distance.", "Saying that comets speed up when they move away from the Sun."],
            examinerNote: "In (a) the direction mark needs 'towards the Sun' or 'towards the centre'. In (c) allow ecf from a wrong radius only; the radius is given.",
          },
        },
      ],
    },
    {
      id: "eph11-u3-stars-red-shift",
      title: "The life cycle of stars and red shift",
      skill: "Describe the life cycles of stars of different masses and use red shift as evidence for the Big Bang and an expanding universe.",
      lesson: {
        sections: [
          {
            heading: "The life cycle of a star",
            body: "Stars form from a **nebula**: a cloud of dust and gas, mostly hydrogen. Gravity pulls the material together, it heats up and forms a **protostar**. When the core is hot enough (millions of degrees), hydrogen nuclei **fuse** into helium, releasing energy. The star is now on the **main sequence**: the outward pressure from the fusion balances the inward pull of gravity, so it is stable for billions of years.\n\nWhen hydrogen in the core runs out:\n\n- **Stars of about the mass of the Sun**: expand into a **red giant**, then throw off outer layers and shrink to a **white dwarf**, which cools and fades.\n- **Much more massive stars**: expand into a **red supergiant**, then explode as a **supernova**. The core left behind collapses to a **neutron star** or, if massive enough, a **black hole**.\n\nHeavy elements are made in stars and supernovae and spread through space, so they were available for new stars, planets and life.",
          },
          {
            heading: "Red shift and the expanding universe",
            body: "Light from distant galaxies is **red shifted**: wavelengths are longer than those from the same source on Earth, so spectral lines move towards the red end. Red shift occurs because the galaxies are **moving away** from us.\n\nTwo key observations:\n\n- Almost all galaxies show red shift, so the universe is **expanding**.\n- More distant galaxies have a **greater** red shift, so they are moving away **faster**.\n\nRunning this backwards, all matter was once in a very small, hot, dense point. This is the **Big Bang theory**, about 13.8 billion years ago. Further evidence is the **cosmic microwave background radiation (CMBR)**, a weak microwave radiation that fills the whole universe and is left over from the early universe. The wavelength has stretched as the universe expanded.",
          },
        ],
        keyFormulas: [
          { name: "Red shift", statement: "light from receding galaxies has longer wavelength: $\\lambda_{\\text{observed}} > \\lambda_{\\text{source}}$" },
          { name: "Sun-like star", statement: "nebula $\\rightarrow$ protostar $\\rightarrow$ main sequence $\\rightarrow$ red giant $\\rightarrow$ white dwarf" },
          { name: "Massive star", statement: "nebula $\\rightarrow$ protostar $\\rightarrow$ main sequence $\\rightarrow$ red supergiant $\\rightarrow$ supernova $\\rightarrow$ neutron star or black hole" },
        ],
        workedExample: {
          problem: "Explain why the Sun will not become a black hole.",
          solution: "A black hole forms only from the core of a star much more massive than the Sun. The Sun will expand into a red giant, lose its outer layers and shrink to a white dwarf, which gradually cools. It does not have enough mass to explode as a supernova or to collapse further.",
        },
      },
      questions: [
        {
          id: "eph11-u3-stars-red-shift-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which object does the Sun become after the red giant stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A black hole" },
              { id: "b", text: "A white dwarf" },
              { id: "c", text: "A supernova" },
              { id: "d", text: "A neutron star" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Life cycle of a Sun-like star", statement: "A star of about the Sun's mass becomes a red giant, then a white dwarf." },
            ],
            steps: [
              { reasoning: "The Sun is not massive enough for a supernova, so its core remains as a white dwarf after the outer layers are lost.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A white dwarf",
            commonErrors: ["Choosing a supernova, which is an event and not an end state, and applies to massive stars.", "Choosing black hole or neutron star, the end states of massive stars."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "eph11-u3-stars-red-shift-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the life cycle of the Sun, from its formation to its final stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Life cycle of a Sun-like star", statement: "nebula, protostar, main sequence, red giant, white dwarf." },
            ],
            steps: [
              { reasoning: "A star forms from a nebula, a cloud of dust and gas, pulled together by gravity.", marks: 1, markCode: "B" },
              { reasoning: "It becomes a protostar, and when hot enough, hydrogen fuses into helium and it becomes a stable main sequence star.", marks: 1, markCode: "B" },
              { reasoning: "When the hydrogen runs out, it expands to form a red giant.", marks: 1, markCode: "B" },
              { reasoning: "It sheds its outer layers and the core shrinks to a white dwarf, which cools.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Nebula, protostar, main sequence, red giant, white dwarf.",
            commonErrors: ["Including a supernova or neutron star, which apply to massive stars.", "Missing the nebula or main sequence stage."],
            examinerNote: "Stages must be in the correct order for full marks. Allow 'planetary nebula' for shedding the outer layers.",
          },
        },
        {
          id: "eph11-u3-stars-red-shift-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how red shift provides evidence that the universe is expanding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Red shift", statement: "Light from receding galaxies has its wavelength increased." },
              { kind: "principle", name: "Expanding universe", statement: "Greater red shift means a greater speed of recession, and distant galaxies have the greatest red shift." },
            ],
            steps: [
              { reasoning: "The light from distant galaxies has a longer wavelength than expected (it is shifted to the red end of the spectrum).", marks: 1, markCode: "B" },
              { reasoning: "This means the galaxies are moving away from us.", marks: 1, markCode: "B" },
              { reasoning: "Nearly all galaxies show red shift, so they are all moving away from each other.", marks: 1, markCode: "B" },
              { reasoning: "More distant galaxies have a greater red shift, so they move faster, which shows that space itself is expanding.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Light from almost all galaxies has a longer wavelength, so they are receding; the further the galaxy, the larger the red shift, so the universe is expanding.",
            commonErrors: ["Saying that the galaxies' light becomes shorter wavelength.", "Saying that red shift shows the galaxies are getting redder because they cool."],
            examinerNote: "Reject 'frequency increases'. The R mark needs a link between distance, speed and expansion.",
          },
        },
        {
          id: "eph11-u3-stars-red-shift-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An astronomer measures the speed at which three galaxies move away from Earth, using the red shift of their light.\n\n| Galaxy | Distance from Earth (Mpc) | Speed of recession (km/s) |\n| --- | --- | --- |\n| A | 50 | 3500 |\n| B | 100 | 7000 |\n| C | 200 | 14\\,000 |\n\nMpc stands for megaparsec, a unit of distance.",
          parts: [
            { label: "a", prompt: "State what is meant by red shift.", marks: 2 },
            { label: "b", prompt: "Calculate the speed of recession divided by the distance for galaxy A, in $\\text{km/s}$ per Mpc.", marks: 2 },
            { label: "c", prompt: "Describe the relationship between distance and speed of recession shown in the table.", marks: 2 },
            { label: "d", prompt: "State what this relationship suggests about the universe, and explain how it leads to the Big Bang theory.", marks: 3 },
            { label: "e", prompt: "Name a second piece of evidence for the Big Bang theory.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Red shift", statement: "An increase in the wavelength of light from a source that is moving away." },
              { kind: "principle", name: "Expanding universe", statement: "More distant galaxies recede faster, so the universe is expanding." },
              { kind: "principle", name: "Big Bang", statement: "Running the expansion backwards, all matter began in a very small, hot, dense point." },
            ],
            steps: [
              { part: "a", reasoning: "The wavelength of the light (from a galaxy) is longer than expected, increased.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "This is caused by the source moving away from the observer.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the speed by the distance for galaxy A.", working: "\\frac{3500}{50}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. Galaxies B and C give $\\frac{7000}{100} = 70$ and $\\frac{14\\,000}{200} = 70$ as well.", working: "70\\text{ km/s per Mpc}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The speed of recession increases as the distance increases.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The two are directly proportional: doubling the distance doubles the speed (the ratio is constant at 70).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "All the galaxies are moving apart, so the universe is expanding.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Going back in time, the galaxies would be closer together.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So everything started from a single, very small, hot, dense point, and expanded outwards: the Big Bang.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Cosmic microwave background radiation (CMBR).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) light has a longer wavelength because the source moves away (b) $70\\text{ km/s per Mpc}$ (c) directly proportional (d) the universe is expanding from a small, hot, dense start: the Big Bang (e) cosmic microwave background radiation",
            commonErrors: ["Dividing distance by speed, giving $0.0143$.", "Saying that galaxy C is moving at a higher speed because it is bigger.", "Saying that the galaxies are moving away from the Earth because Earth is the centre of the universe."],
            examinerNote: "In (b) allow ecf in (c) only if the ratios are stated as constant. In (e) allow CMB or 'microwave background'.",
          },
        },
      ],
    },
  ],
};
