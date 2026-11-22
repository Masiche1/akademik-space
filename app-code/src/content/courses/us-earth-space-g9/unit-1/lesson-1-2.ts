import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ess9-u1-lesson-1-2",
  code: "1-2",
  title: "The Universe",
  goal: "I CAN use redshift, Hubble's law, the cosmic microwave background and light element abundances to explain the Big Bang, and use Kepler's laws to describe and calculate orbital motion.",
  standards: ["HS-ESS1-2", "HS-ESS1-4", "SEP: Using Mathematics and Computational Thinking", "SEP: Constructing Explanations", "CCC: Scale, Proportion, and Quantity"],
  vocabulary: [
    { term: "Redshift", definition: "A shift of light from a receding source to longer wavelengths, caused by the expansion of space." },
    { term: "Hubble's law", definition: "The velocity at which a galaxy recedes is proportional to its distance: $v=H_0d$." },
    { term: "Cosmic microwave background", definition: "Faint microwave radiation coming from all directions, left over from the hot early universe." },
    { term: "Astronomical unit (AU)", definition: "The average distance from Earth to the Sun, about $1.50\\times10^{8}\\text{ km}$." },
    { term: "Orbital period", definition: "The time an object takes to complete one orbit." },
    { term: "Semi-major axis", definition: "Half of the longest diameter of an elliptical orbit; the average orbital distance." },
    { term: "Ellipse", definition: "A closed oval curve; the shape of every orbit under gravity." },
  ],
  concepts: [
    {
      id: "ess9-u1-big-bang-evidence",
      title: "The Big Bang, redshift and Hubble's law",
      skill: "Use redshift, Hubble's law, the microwave background and light element abundances to support the Big Bang theory.",
      lesson: {
        sections: [
          {
            heading: "Redshift and an expanding universe",
            body: "Light from distant galaxies is shifted to **longer wavelengths**. This is **redshift**. Just as a siren drops in pitch as it moves away, light from a receding source is stretched. Spectral lines of known elements appear at longer wavelengths than in the laboratory.\n\nFor speeds much less than light, the redshift $z$ gives the recession speed:\n\n$$z=\\frac{\\lambda_{\\text{observed}}-\\lambda_{\\text{emitted}}}{\\lambda_{\\text{emitted}}},\\qquad v=zc$$\n\nwhere $c=3.00\\times10^{5}\\text{ km/s}$.",
          },
          {
            heading: "Hubble's law",
            body: "In 1929 Edwin Hubble found that almost all galaxies are moving away from us, and that **farther galaxies recede faster**. This is **Hubble's law**:\n\n$$v=H_0d$$\n\nwhere $H_0\\approx70\\text{ km/s per megaparsec (Mpc)}$ is the Hubble constant. It does not mean we are at the center: space itself is expanding, so every galaxy moves away from every other. Running the expansion backward, all matter was once in a hot, dense state about **13.8 billion years ago**. This is the **Big Bang**.",
          },
          {
            heading: "More evidence for the Big Bang",
            body: "- **Cosmic microwave background (CMB):** the early universe was a hot glow. As space expanded, the light stretched into microwaves, now at about $2.7\\text{ K}$ and almost uniform in every direction.\n- **Light element abundances:** in the first few minutes, fusion made nuclei in a ratio of about **75% hydrogen and 25% helium by mass**, with tiny traces of deuterium and lithium. This closely matches observations of the oldest gas clouds.\n\nThe theory explains redshift, the CMB and the abundances together, which makes it very strong.",
          },
        ],
        keyFormulas: [
          { name: "Redshift", statement: "$z=\\dfrac{\\lambda_{\\text{obs}}-\\lambda_{\\text{emit}}}{\\lambda_{\\text{emit}}}$, and $v=zc$ for small $z$" },
          { name: "Hubble's law", statement: "$v=H_0d$, with $H_0\\approx70\\text{ km/s/Mpc}$" },
          { name: "Big Bang evidence", statement: "Redshift of galaxies, the CMB (about 2.7 K), and about 75% H and 25% He by mass" },
        ],
        workedExample: {
          problem: "A galaxy is $300\\text{ Mpc}$ away. Use $H_0=70\\text{ km/s/Mpc}$ to calculate its recession speed.",
          solution: "Use $v=H_0d$. Then $v=70\\times300=21\\,000\\text{ km/s}$. This is about $7\\%$ of the speed of light.",
        },
      },
      questions: [
        {
          id: "ess9-u1-big-bang-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light from most distant galaxies is redshifted. What does this indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The galaxies are made of different elements from nearby stars" },
              { id: "b", text: "The galaxies are moving away from us, because space is expanding" },
              { id: "c", text: "The galaxies are colder than the Sun" },
              { id: "d", text: "The galaxies are moving toward us" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Redshift", statement: "Light from receding sources is stretched to longer wavelengths." },
            ],
            steps: [
              { reasoning: "Longer wavelengths mean the sources are receding, which shows that the universe is expanding.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The galaxies are moving away from us, because space is expanding",
            commonErrors: ["Choosing (b); approaching sources show blueshift.", "Confusing redshift with the color of a cool star."],
            examinerNote: "B1 for galaxies moving away / universe expanding.",
          },
        },
        {
          id: "ess9-u1-big-bang-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A galaxy is $200\\text{ Mpc}$ from Earth. The Hubble constant is $70\\text{ km/s/Mpc}$.\n\nUse Hubble's law to calculate the speed at which the galaxy is moving away from Earth, in km/s.",
          response: { type: "numeric", parts: [{ label: "Recession speed", answer: 14000, tolerance: 1, unit: "km/s" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Hubble's law", statement: "$v=H_0d$" },
            ],
            steps: [
              { reasoning: "Substitute the Hubble constant and the distance.", working: "v=H_0d=70\\times200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "v=14\\,000\\text{ km/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14\\,000\\text{ km/s}$",
            commonErrors: ["Dividing 200 by 70.", "Omitting units or using the wrong units (Mpc)."],
            examinerNote: "M1 for $70\\times200$. A1 for 14 000 km/s. Allow $1.4\\times10^{4}$.",
          },
        },
        {
          id: "ess9-u1-big-bang-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims: 'Because all galaxies are moving away from us, Earth must be at the center of the universe.'\n\nEvaluate this claim, using evidence from Hubble's law.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Hubble's law", statement: "$v=H_0d$: recession speed is proportional to distance." },
              { kind: "principle", name: "Expansion of space", statement: "Space itself expands, so all observers see other galaxies receding." },
            ],
            steps: [
              { reasoning: "Claim: the student's claim is not supported by the evidence.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: the speed of recession increases in proportion to distance, so a galaxy twice as far away recedes twice as fast.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: in an expanding space, every region moves away from every other, like dots on an inflating balloon.", marks: 1, markCode: "B" },
              { reasoning: "An observer in any other galaxy would also measure the same pattern, so there is no special center.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is not supported: Hubble's law ($v\\propto d$) is what you would see from any position in a uniformly expanding universe, so Earth is not at the center.",
            commonErrors: ["Agreeing because everything moves away from us.", "Saying galaxies are moving through space away from an explosion point."],
            examinerNote: "R1 for rejecting the claim. B1 for speed proportional to distance. B1 for space expanding / balloon analogy. R1 for any observer sees the same.",
          },
        },
        {
          id: "ess9-u1-big-bang-evidence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hydrogen spectral line has a wavelength of $500\\text{ nm}$ in the laboratory. In the light from a distant galaxy, the same line is observed at $510\\text{ nm}$. Use $c=3.00\\times10^{5}\\text{ km/s}$ and $H_0=70\\text{ km/s/Mpc}$.",
          parts: [
            { label: "a", prompt: "Calculate the redshift $z$ of the galaxy.", marks: 2 },
            { label: "b", prompt: "Calculate the speed at which the galaxy is receding, in km/s.", marks: 2 },
            { label: "c", prompt: "Use Hubble's law to estimate the distance to the galaxy, in Mpc. Give your answer to 2 significant figures.", marks: 2 },
            { label: "d", prompt: "State and explain **two** other pieces of evidence, besides redshift, that support the Big Bang theory.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "$z=\\dfrac{\\lambda_{\\text{obs}}-\\lambda_{\\text{emit}}}{\\lambda_{\\text{emit}}}$ and $v=zc$" },
              { kind: "law", name: "Hubble's law", statement: "$d=\\dfrac{v}{H_0}$" },
              { kind: "principle", name: "Big Bang evidence", statement: "The CMB and the abundances of hydrogen and helium are both predicted by a hot, dense early universe." },
            ],
            steps: [
              { part: "a", reasoning: "Find the change in wavelength divided by the emitted wavelength.", working: "z=\\frac{510-500}{500}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "z=0.020", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply the redshift by the speed of light.", working: "v=zc=0.020\\times3.00\\times10^{5}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "v=6000\\text{ km/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rearrange Hubble's law and substitute.", working: "d=\\frac{v}{H_0}=\\frac{6000}{70}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 2 significant figures.", working: "d=85.7\\approx86\\text{ Mpc}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cosmic microwave background: uniform microwave radiation of about 2.7 K from all directions.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It is the stretched glow of the hot early universe, cooled as space expanded.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Light element abundances: about 75% hydrogen and 25% helium by mass, matching predictions for fusion in the first minutes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.020$ (b) $6000\\text{ km/s}$ (c) $86\\text{ Mpc}$ (d) The CMB is the cooled glow of the early universe; the 75% H / 25% He ratio matches the Big Bang predictions.",
            commonErrors: ["In (a) dividing by the observed wavelength.", "In (c) multiplying 6000 by 70.", "In (d) describing the CMB as light from stars."],
            examinerNote: "(b) Allow ecf from (a). (c) Allow ecf from (b); accept 85.7. (d) B1 for identifying the CMB, B1 for its origin, B1 for the helium/hydrogen abundances with their ratio. Allow deuterium or lithium traces.",
          },
        },
      ],
    },
    {
      id: "ess9-u1-keplers-laws-orbits",
      title: "Kepler's laws and orbital motion",
      skill: "Describe orbits with Kepler's laws and gravity, and calculate periods and distances using $T^2 = a^3$ in AU and years.",
      lesson: {
        sections: [
          {
            heading: "Kepler's three laws",
            body: "1. **Law of ellipses:** Each planet orbits the Sun in an ellipse with the Sun at one focus.\n2. **Law of equal areas:** A line from the Sun to a planet sweeps out equal areas in equal times. So a planet moves **faster** when it is closer to the Sun and slower when farther away.\n3. **Law of periods:** The square of the orbital period is proportional to the cube of the semi-major axis: $T^2\\propto a^3$.\n\nWhen $T$ is in **years** and $a$ is in **AU**, the constant is exactly 1:\n\n$$T^2=a^3$$",
          },
          {
            heading: "Gravity explains the laws",
            body: "Newton showed that gravity provides the force that keeps a planet in orbit:\n\n$$F=\\frac{GMm}{r^2}$$\n\nThe force is **inversely proportional to the square of the distance**: doubling the distance cuts the force to one quarter. Planets farther from the Sun feel a weaker pull, so they move more slowly and take longer to orbit. The same laws apply to moons, satellites and exoplanets around other stars.",
          },
        ],
        keyFormulas: [
          { name: "Kepler's third law", statement: "$T^2=a^3$ ($T$ in years, $a$ in AU)" },
          { name: "Law of gravitation", statement: "$F=\\dfrac{GMm}{r^2}$" },
          { name: "Kepler's second law", statement: "Equal areas in equal times: faster when closer to the Sun" },
        ],
        workedExample: {
          problem: "An asteroid orbits the Sun with a semi-major axis of 2.0 AU. Calculate its orbital period.",
          solution: "Use $T^2=a^3$. Then $T^2=2.0^3=8.0$, so $T=\\sqrt{8.0}=2.83\\approx2.8$ years.",
        },
      },
      questions: [
        {
          id: "ess9-u1-keplers-laws-orbits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to Kepler's second law, when does a planet move fastest in its orbit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When it is closest to the Sun" },
              { id: "b", text: "When it is farthest from the Sun" },
              { id: "c", text: "It always moves at the same speed" },
              { id: "d", text: "When it is at the middle of its orbit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Kepler's second law", statement: "A line from the Sun to a planet sweeps equal areas in equal times, so the planet is fastest when closest to the Sun." },
            ],
            steps: [
              { reasoning: "To sweep equal areas in equal time, the planet must move faster when the line is shorter, near the Sun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** When it is closest to the Sun",
            commonErrors: ["Thinking that planets move at constant speed in circular orbits.", "Thinking that a planet speeds up as it moves away from the Sun."],
            examinerNote: "B1 for closest to the Sun / perihelion.",
          },
        },
        {
          id: "ess9-u1-keplers-laws-orbits-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A comet orbits the Sun with a semi-major axis of $4.0\\text{ AU}$.\n\nUse $T^2=a^3$ to calculate its orbital period in years.",
          response: { type: "numeric", parts: [{ label: "Orbital period", answer: 8, tolerance: 0.01, unit: "years" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Kepler's third law", statement: "$T^2=a^3$ with $T$ in years and $a$ in AU." },
            ],
            steps: [
              { reasoning: "Cube the semi-major axis.", working: "T^2=4.0^3=64", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "T=\\sqrt{64}=8.0\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.0\\text{ years}$",
            commonErrors: ["Squaring $a$ instead of cubing it, giving $T=4$.", "Forgetting to take the square root and giving 64."],
            examinerNote: "M1 for $4.0^3$ or 64. A1 for 8.0 years.",
          },
        },
        {
          id: "ess9-u1-keplers-laws-orbits-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Mars takes $1.88$ years to orbit the Sun.\n\nUse Kepler's third law to calculate the semi-major axis of the orbit of Mars in AU. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Semi-major axis", answer: 1.52, tolerance: 0.01, unit: "AU" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Kepler's third law", statement: "$a^3=T^2$, so $a=\\sqrt[3]{T^2}$." },
            ],
            steps: [
              { reasoning: "Square the period.", working: "a^3=T^2=1.88^2=3.534", marks: 1, markCode: "M" },
              { reasoning: "Take the cube root.", working: "a=\\sqrt[3]{3.534}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "a=1.52\\text{ AU}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.52\\text{ AU}$",
            commonErrors: ["Taking the square root of $T^2$ and cubing, which would reverse the operations.", "Taking the cube root of 1.88 only."],
            examinerNote: "M1 for $1.88^2$ (3.53). M1 for cube root. A1 for 1.52. Allow 1.523.",
          },
        },
        {
          id: "ess9-u1-keplers-laws-orbits-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Halley's Comet has an orbital period of $76$ years and a closest approach to the Sun (perihelion) of $0.59\\text{ AU}$. Jupiter has a semi-major axis of $5.20\\text{ AU}$.",
          parts: [
            { label: "a", prompt: "Calculate the orbital period of Jupiter in years. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Calculate the semi-major axis of Halley's Comet in AU. Give your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "The orbit's major axis is the sum of perihelion and aphelion (farthest distance). Calculate the aphelion distance of Halley's Comet in AU.", marks: 2 },
            { label: "d", prompt: "Compare the speed of the comet at perihelion and aphelion, and explain, using gravity, why a planet at twice the distance from the Sun feels a quarter of the gravitational force.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Kepler's third law", statement: "$T^2=a^3$ ($T$ in years, $a$ in AU)." },
              { kind: "law", name: "Kepler's second law", statement: "Equal areas in equal times: faster nearer the Sun." },
              { kind: "law", name: "Law of gravitation", statement: "$F\\propto\\dfrac{1}{r^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "Cube the semi-major axis and take the square root.", working: "T^2=5.20^3=140.6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "T=\\sqrt{140.6}=11.9\\text{ years}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Square the period.", working: "a^3=76^2=5776", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take the cube root.", working: "a=\\sqrt[3]{5776}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "a=17.9\\text{ AU}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Major axis is $2a$; subtract the perihelion distance.", working: "2\\times17.94-0.59", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\text{aphelion}=35.3\\text{ AU}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The comet moves fastest at perihelion (closest) and slowest at aphelion, so that it sweeps equal areas in equal times.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Gravity follows $F\\propto1/r^2$.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Doubling $r$ gives $1/2^2=1/4$ of the force.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $11.9\\text{ years}$ (b) $17.9\\text{ AU}$ (c) $35.3\\text{ AU}$ (d) Fastest at perihelion, slowest at aphelion; $F\\propto1/r^2$, so doubling the distance gives one quarter of the force.",
            commonErrors: ["In (c) giving $2a$ without subtracting the perihelion, or using $a$ as the aphelion.", "In (d) saying the force halves when distance doubles."],
            examinerNote: "(b) Allow 17.94. (c) Allow ecf from (b): $2a-0.59$; accept 35.3 to 35.4. (d) Allow 'faster when closer' oe.",
          },
        },
      ],
    },
  ],
};
