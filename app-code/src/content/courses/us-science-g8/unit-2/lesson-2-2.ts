import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "s8-u2-lesson-2-2",
  code: "2-2",
  title: "Light",
  goal: "I CAN describe the electromagnetic spectrum and its uses, and explain how light is reflected, refracted, absorbed and transmitted when it meets different materials.",
  standards: ["MS-PS4-2", "SEP: Developing and Using Models", "SEP: Obtaining, Evaluating, and Communicating Information"],
  vocabulary: [
    { term: "Electromagnetic wave", definition: "A wave that can travel through a vacuum and carries energy as changing electric and magnetic fields. Light is one example." },
    { term: "Electromagnetic spectrum", definition: "The full range of electromagnetic waves, from radio waves (long wavelength) to gamma rays (short wavelength)." },
    { term: "Reflection", definition: "When a wave bounces off a surface. The angle of incidence equals the angle of reflection." },
    { term: "Refraction", definition: "The bending of a wave as it passes from one material into another because its speed changes." },
    { term: "Absorption", definition: "When a material takes in the energy of a wave instead of reflecting or transmitting it." },
    { term: "Transmission", definition: "When a wave passes through a material." },
    { term: "Normal", definition: "An imaginary line at right angles (90 degrees) to a surface, used to measure angles of light rays." },
  ],
  concepts: [
    {
      id: "s8-u2-electromagnetic-spectrum",
      title: "The electromagnetic spectrum",
      skill: "Order the types of electromagnetic wave and relate their frequency, wavelength and energy to their uses and hazards.",
      lesson: {
        sections: [
          {
            heading: "Light is an electromagnetic wave",
            body: "Visible light is one part of a family of **electromagnetic (EM) waves**. Unlike sound, EM waves do **not** need a medium, so they can travel through the vacuum of space. All EM waves travel at the same speed in a vacuum: about $3.0 \\times 10^{8}\\text{ m/s}$.\n\nBecause the speed is fixed, the wave equation $v = f\\lambda$ shows that waves with a higher frequency have a shorter wavelength.",
          },
          {
            heading: "The spectrum in order",
            body: "From **lowest** frequency (longest wavelength) to **highest** frequency (shortest wavelength):\n\n**radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays**\n\nHigher-frequency waves carry more energy per wave. That is why ultraviolet, X-rays and gamma rays can damage living cells, while radio waves are generally harmless.\n\nWithin visible light, red has the lowest frequency and longest wavelength, and violet has the highest frequency and shortest wavelength.",
          },
          {
            heading: "Uses and hazards",
            body: "- **Radio waves**: broadcasting and communication.\n- **Microwaves**: cooking and cell phone signals.\n- **Infrared**: remote controls, heat lamps and thermal cameras.\n- **Visible light**: seeing, and fiber-optic communication.\n- **Ultraviolet**: sterilizing water; too much causes sunburn and skin cancer.\n- **X-rays**: medical images of bones; limited use because they damage cells.\n- **Gamma rays**: treating cancer and sterilizing equipment; very harmful to cells.",
          },
        ],
        keyFormulas: [
          { name: "Speed of EM waves in a vacuum", statement: "$c = 3.0 \\times 10^{8}\\text{ m/s}$" },
          { name: "Wave equation", statement: "$c = f\\lambda$" },
          { name: "Spectrum order (low to high frequency)", statement: "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma" },
        ],
        workedExample: {
          problem: "A radio station broadcasts at a frequency of $1.0 \\times 10^{8}\\text{ Hz}$. Radio waves travel at $3.0 \\times 10^{8}\\text{ m/s}$. Calculate the wavelength.",
          solution: "Rearrange $v = f\\lambda$ to $\\lambda = \\dfrac{v}{f}$. Substitute: $\\lambda = \\dfrac{3.0 \\times 10^{8}}{1.0 \\times 10^{8}} = 3.0\\text{ m}$.",
        },
      },
      questions: [
        {
          id: "s8-u2-electromagnetic-spectrum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of electromagnetic wave has the **highest frequency**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "Infrared" },
              { id: "c", text: "Ultraviolet" },
              { id: "d", text: "Gamma rays" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Order of the spectrum", statement: "Frequency increases from radio waves through to gamma rays." },
            ],
            steps: [
              { reasoning: "Gamma rays are at the high-frequency end of the spectrum, beyond X-rays and ultraviolet.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Gamma rays",
            commonErrors: ["Choosing radio waves, which have the lowest frequency and longest wavelength.", "Choosing ultraviolet because it is the best-known harmful wave."],
            examinerNote: "B1 for gamma rays.",
          },
        },
        {
          id: "s8-u2-electromagnetic-spectrum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A microwave signal has a frequency of $3.0 \\times 10^{9}\\text{ Hz}$. Microwaves travel at $3.0 \\times 10^{8}\\text{ m/s}$ in air.\n\nCalculate the wavelength of the microwaves in meters.",
          response: { type: "numeric", parts: [{ label: "Wavelength", answer: 0.1, tolerance: 0.001, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$, so $\\lambda = \\dfrac{v}{f}$" },
            ],
            steps: [
              { reasoning: "Rearrange and substitute the speed and frequency.", working: "\\lambda = \\frac{v}{f} = \\frac{3.0 \\times 10^{8}}{3.0 \\times 10^{9}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "\\lambda = 0.1\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.1\\text{ m}$",
            commonErrors: ["Multiplying speed and frequency.", "Powers of ten slips giving 10 m or 1 m."],
            examinerNote: "M1 for 3.0e8 / 3.0e9 (oe). A1 for 0.1 m. Allow 10 cm.",
          },
        },
        {
          id: "s8-u2-electromagnetic-spectrum-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Light from the Sun takes $500\\text{ s}$ to reach Earth. Light travels at $3.0 \\times 10^{8}\\text{ m/s}$.\n\nCalculate the distance from the Sun to Earth. Give your answer in meters in the form $a \\times 10^{11}$ and enter the value of $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d = vt$" },
            ],
            steps: [
              { reasoning: "Multiply the speed of light by the time.", working: "d = vt = 3.0 \\times 10^{8} \\times 500", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $3.0 \\times 500 = 1500$, so $d = 1500 \\times 10^{8}\\text{ m}$.", working: "d = 1.5 \\times 10^{3} \\times 10^{8}", marks: 1, markCode: "A" },
              { reasoning: "Write in the required form.", working: "d = 1.5 \\times 10^{11}\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5 \\times 10^{11}\\text{ m}$, so $a = 1.5$",
            commonErrors: ["Dividing speed by time.", "Mistakes with powers of ten, such as $1.5 \\times 10^{10}$."],
            examinerNote: "M1 for 3.0e8 x 500. A1 for 1500e8 or equivalent. A1 for 1.5 x 10^11 m. Full marks for correct final answer.",
          },
        },
        {
          id: "s8-u2-electromagnetic-spectrum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hospital uses X-rays to image broken bones and a dentist uses ultraviolet lamps to harden fillings. A student researches the electromagnetic spectrum.",
          parts: [
            { label: "a", prompt: "Write the following in order of increasing frequency: ultraviolet, radio waves, infrared, X-rays.", marks: 2 },
            { label: "b", prompt: "Radio waves have a wavelength of $300\\text{ m}$. Calculate their frequency. Use $v = 3.0 \\times 10^{8}\\text{ m/s}$.", marks: 2 },
            { label: "c", prompt: "Explain why a technician leaves the room or wears a lead apron when X-ray images are taken but not when radio is broadcast.", marks: 2 },
            { label: "d", prompt: "Suggest why X-rays can show bones in an image but ultraviolet cannot.", marks: 1 },
            { label: "e", prompt: "Evaluate the claim: 'All electromagnetic waves are harmful.' Use evidence from the spectrum.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Order of the spectrum", statement: "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma, in increasing frequency." },
              { kind: "formula", name: "Wave equation", statement: "$f = \\dfrac{v}{\\lambda}$" },
              { kind: "principle", name: "Energy and harm", statement: "Higher-frequency waves carry more energy and can damage cells." },
            ],
            steps: [
              { part: "a", reasoning: "Radio waves are lowest and X-rays highest.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Complete correct order: radio waves, infrared, ultraviolet, X-rays.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rearrange and substitute.", working: "f = \\frac{v}{\\lambda} = \\frac{3.0 \\times 10^{8}}{300}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "f = 1.0 \\times 10^{6}\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "X-rays have a high frequency, so they carry a lot of energy.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This energy can ionize or damage living cells, causing harm such as cancer; radio waves have low energy and do not damage cells.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "X-rays pass through soft tissue but are absorbed by dense bone, whereas ultraviolet is mostly absorbed by skin.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The claim is not supported: radio waves and visible light are generally safe.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Only high-frequency waves (ultraviolet, X-rays, gamma rays) carry enough energy to damage cells.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Radio waves, infrared, ultraviolet, X-rays (b) $1.0 \\times 10^{6}\\text{ Hz}$ (c) X-rays carry high energy that can damage cells (d) Bone absorbs X-rays but soft tissue transmits them (e) The claim is false: only high-frequency waves are harmful.",
            commonErrors: ["In (a) reversing the order.", "In (b) multiplying 300 by the speed.", "In (c) saying X-rays are radioactive."],
            examinerNote: "(a) B1 for two adjacent correct, B1 all correct. (b) Allow 1 MHz. (d) Allow 'bones absorb more X-rays' oe. (e) Award marks for named harmless and harmful waves.",
          },
        },
      ],
    },
    {
      id: "s8-u2-light-interactions",
      title: "Reflection, refraction, absorption and transmission",
      skill: "Explain what happens when light meets different materials, using the law of reflection and refraction.",
      lesson: {
        sections: [
          {
            heading: "Reflection",
            body: "When light hits a surface it can bounce off. This is **reflection**. Angles are measured from the **normal**, a line at $90^\\circ$ to the surface. The **law of reflection** says:\n\n$$\\text{angle of incidence} = \\text{angle of reflection}$$\n\nA smooth, shiny surface such as a mirror gives a clear image because all the reflected rays leave in the same direction. A rough surface scatters light in many directions, so no clear image forms.",
          },
          {
            heading: "Refraction",
            body: "When light passes from one material into another, its speed changes and it can change direction. This is **refraction**. Light entering a denser material such as glass or water from air slows down and bends **toward** the normal. Leaving the denser material it speeds up and bends **away** from the normal. A straw in water looks bent because of refraction. Lenses use refraction to focus light.",
          },
          {
            heading: "Absorption and transmission",
            body: "When light hits a material it can be reflected, absorbed, transmitted, or a mixture.\n\n- **Transparent** materials transmit most light (clear glass).\n- **Translucent** materials transmit some light, scattered (frosted glass).\n- **Opaque** materials absorb or reflect all light (wood, metal).\n\nAbsorbed light energy transfers to the material, usually warming it. The color of an object depends on which colors it reflects: a red shirt reflects red light and absorbs the other colors. A white object reflects all colors; a black object absorbs nearly all.",
          },
        ],
        keyFormulas: [
          { name: "Law of reflection", statement: "angle of incidence = angle of reflection (both from the normal)" },
          { name: "Refraction into a denser material", statement: "Light slows down and bends toward the normal" },
          { name: "Color of an object", statement: "The color seen is the color the object reflects" },
        ],
        workedExample: {
          problem: "A ray of light hits a flat mirror with an angle of incidence of $40^\\circ$. State the angle of reflection and the angle between the incident ray and the reflected ray.",
          solution: "By the law of reflection, the angle of reflection is $40^\\circ$. The angle between the two rays is $40^\\circ + 40^\\circ = 80^\\circ$.",
        },
      },
      questions: [
        {
          id: "s8-u2-light-interactions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A beam of light enters a glass block from air at an angle. What happens to the light as it enters the glass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It speeds up and bends away from the normal" },
              { id: "b", text: "It slows down and bends toward the normal" },
              { id: "c", text: "It slows down and bends away from the normal" },
              { id: "d", text: "It keeps the same speed and direction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Refraction", statement: "Light entering a denser material slows down and bends toward the normal." },
            ],
            steps: [
              { reasoning: "Glass is denser than air, so light slows down and bends toward the normal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It slows down and bends toward the normal",
            commonErrors: ["Thinking light speeds up in glass.", "Confusing bending toward the normal with bending away from it."],
            examinerNote: "B1 for slows down and bends toward the normal.",
          },
        },
        {
          id: "s8-u2-light-interactions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ray of light hits a plane mirror. The angle between the incident ray and the reflected ray is $70^\\circ$.\n\nCalculate the angle of incidence, measured from the normal.",
          response: { type: "numeric", parts: [{ label: "Angle of incidence", answer: 35, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "Angle of incidence = angle of reflection." },
            ],
            steps: [
              { reasoning: "The incident and reflected angles are equal, and together they make the $70^\\circ$ between the rays.", working: "2i = 70^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Divide by two.", working: "i = 35^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35^\\circ$",
            commonErrors: ["Giving 70 degrees without halving.", "Giving 55 degrees by using the angle to the mirror surface."],
            examinerNote: "M1 for 70 / 2 (oe). A1 for 35.",
          },
        },
        {
          id: "s8-u2-light-interactions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student looks at a red apple in white light.\n\nUse ideas about reflection and absorption to explain why the apple looks red. Then predict what color the apple appears in pure green light, and explain your prediction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Object color", statement: "An object appears the color of the light it reflects; other colors are absorbed." },
            ],
            steps: [
              { reasoning: "White light contains all colors; the apple reflects red light.", marks: 1, markCode: "B" },
              { reasoning: "It absorbs the other colors, so only red reaches the eye.", marks: 1, markCode: "B" },
              { reasoning: "In pure green light the apple appears black (or very dark).", marks: 1, markCode: "B" },
              { reasoning: "There is no red light to reflect and the green light is absorbed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The apple reflects red and absorbs other colors, so it looks red. In green light it looks black because the green is absorbed and there is no red to reflect.",
            commonErrors: ["Saying the apple makes its own red light.", "Predicting the apple would look green."],
            examinerNote: "B1 reflects red. B1 absorbs other colors. B1 black/dark. R1 green absorbed and no red light to reflect. Allow 'very dark'.",
          },
        },
        {
          id: "s8-u2-light-interactions-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A group of students shine a narrow beam of light at different materials: a mirror, a glass block, a sheet of frosted glass and a sheet of black card.",
          parts: [
            { label: "a", prompt: "State which material is **opaque**, and which is **translucent**.", marks: 2 },
            { label: "b", prompt: "The beam hits the mirror with an angle of incidence of $25^\\circ$. State the angle of reflection.", marks: 1 },
            { label: "c", prompt: "Describe what happens to the beam as it passes from air into the glass block at an angle.", marks: 2 },
            { label: "d", prompt: "The black card gets warmer after being in the beam. Explain why.", marks: 2 },
            { label: "e", prompt: "Suggest how the students could improve the reliability of their measurement of the angle of reflection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "Angle of incidence = angle of reflection." },
              { kind: "principle", name: "Refraction", statement: "Light bends toward the normal entering a denser material." },
              { kind: "principle", name: "Absorption", statement: "Absorbed light energy is transferred to the material as thermal energy." },
            ],
            steps: [
              { part: "a", reasoning: "Black card is opaque.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Frosted glass is translucent.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Angle of reflection equals angle of incidence: $25^\\circ$.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The light slows down in the glass.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It bends toward the normal (changes direction).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Black card absorbs the light.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The light energy is transferred to thermal energy in the card, raising its temperature.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Repeat the measurement several times (with different angles).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Calculate a mean, ignoring any anomalous result; or use a sharper beam and protractor read at eye level.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Card opaque; frosted glass translucent (b) $25^\\circ$ (c) Slows down and bends toward the normal (d) Absorbed light energy warms the card (e) Repeat and take a mean.",
            commonErrors: ["In (a) calling the mirror opaque only; a mirror is opaque but the question asks for the card and frosted glass.", "In (c) saying the light bends away from the normal.", "In (d) saying the card reflects the heat."],
            examinerNote: "(a) Allow mirror as an additional correct opaque answer if only one opaque answer is required. (e) Allow any valid method to improve precision or reliability.",
          },
        },
      ],
    },
  ],
};
