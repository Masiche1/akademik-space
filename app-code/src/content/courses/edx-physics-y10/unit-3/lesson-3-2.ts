import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eph10-u3-lesson-3-2",
  code: "3-2",
  title: "Electromagnetic Spectrum and Total Internal Reflection",
  goal: "I CAN describe the electromagnetic spectrum with its uses and dangers, and explain total internal reflection and calculate critical angles.",
  standards: ["4PH1 4.6", "4PH1 4.7", "4PH1 4.8", "4PH1 4.9", "4PH1 4.10"],
  vocabulary: [
    { term: "Electromagnetic spectrum", definition: "The family of transverse waves that travel at $3.0 \\times 10^8\\text{ m/s}$ in a vacuum, from radio waves to gamma rays." },
    { term: "Ionising radiation", definition: "Radiation, such as ultraviolet, X-rays and gamma rays, with enough energy to remove electrons from atoms and damage living cells." },
    { term: "Total internal reflection", definition: "The complete reflection of a ray inside a denser medium when it hits the boundary with a less dense medium at an angle greater than the critical angle." },
    { term: "Critical angle, $c$", definition: "The angle of incidence in the denser medium at which the angle of refraction is $90^\\circ$. Found using $\\sin c = \\frac{1}{n}$." },
    { term: "Optical fibre", definition: "A thin glass or plastic strand that carries light signals along its length by repeated total internal reflection." },
    { term: "Endoscope", definition: "A bundle of optical fibres used to look inside the body without major surgery." },
  ],
  concepts: [
    {
      id: "eph10-u3-em-spectrum",
      title: "The electromagnetic spectrum: uses and dangers",
      skill: "Order the electromagnetic waves, state their uses and dangers, and use $v = f\\lambda$ with $c = 3.0 \\times 10^8\\text{ m/s}$.",
      lesson: {
        sections: [
          {
            heading: "The spectrum in order",
            body: "All electromagnetic waves are **transverse**, transfer energy, and travel at the same speed in a vacuum, $3.0 \\times 10^8\\text{ m/s}$. In order of **increasing frequency** (decreasing wavelength):\n\n**radio, microwave, infrared, visible light, ultraviolet, X-ray, gamma ray**\n\nVisible light runs from red (longest wavelength) to violet (shortest). The higher the frequency, the more energy each wave carries.",
          },
          {
            heading: "Uses and dangers",
            body: "| Wave | Uses | Danger |\n| --- | --- | --- |\n| Radio | broadcasting, communications | none significant |\n| Microwave | cooking, satellite signals, mobile phones | heats body cells (internal heating) |\n| Infrared | remote controls, thermal imaging, cooking | skin burns |\n| Visible | vision, photography, optical fibres | very bright light damages the eye |\n| Ultraviolet | sterilising water, security marking, fluorescent lamps | sunburn, skin cancer, eye damage |\n| X-rays | medical imaging of bones, airport security | cell damage, cancer |\n| Gamma rays | sterilising equipment, treating cancer | cell damage, mutation, cancer |\n\nUltraviolet, X-rays and gamma rays are **ionising**, so they can damage DNA.",
          },
          {
            heading: "Calculations with the spectrum",
            body: "All electromagnetic waves obey $v = f\\lambda$ with $v = 3.0 \\times 10^8\\text{ m/s}$. Because $v$ is fixed, a higher frequency means a shorter wavelength. Write large and small numbers in standard form, for example $600\\text{ nm} = 6.0 \\times 10^{-7}\\text{ m}$.",
          },
        ],
        keyFormulas: [
          { name: "Order of spectrum", statement: "radio, microwave, infrared, visible, ultraviolet, X-ray, gamma (increasing frequency)" },
          { name: "Wave equation", statement: "$v = f\\lambda$, with $v = 3.0 \\times 10^8\\text{ m/s}$ for electromagnetic waves in a vacuum" },
          { name: "Ionising waves", statement: "ultraviolet, X-rays and gamma rays" },
        ],
        workedExample: {
          problem: "Radio waves of wavelength $1500\\text{ m}$ are broadcast. Calculate their frequency.",
          solution: "$f = \\frac{v}{\\lambda} = \\frac{3.0 \\times 10^8}{1500} = 2.0 \\times 10^5\\text{ Hz}$.",
        },
      },
      questions: [
        {
          id: "eph10-u3-em-spectrum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which electromagnetic wave has the highest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "X-rays" },
              { id: "c", text: "Gamma rays" },
              { id: "d", text: "Ultraviolet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Order of the spectrum", statement: "Frequency increases from radio waves to gamma rays." },
            ],
            steps: [
              { reasoning: "Gamma rays are at the high-frequency end of the spectrum, above X-rays and ultraviolet.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Gamma rays",
            commonErrors: ["Choosing radio waves, thinking that the longest wavelength has the highest frequency."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "eph10-u3-em-spectrum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Yellow light has a wavelength of $6.0 \\times 10^{-7}\\text{ m}$. The speed of light is $3.0 \\times 10^8\\text{ m/s}$. Calculate its frequency. Give your answer in units of $10^{14}\\text{ Hz}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Frequency (in units of $10^{14}$ Hz)", answer: 5.0, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$, so $f = \\frac{v}{\\lambda}$" },
            ],
            steps: [
              { reasoning: "Rearrange for frequency.", working: "f = \\frac{v}{\\lambda}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "f = \\frac{3.0 \\times 10^8}{6.0 \\times 10^{-7}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac{3.0}{6.0} = 0.5$ and $10^{8-(-7)} = 10^{15}$.", working: "f = 5.0 \\times 10^{14}\\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.0 \\times 10^{14}\\text{ Hz}$, so the answer is $5.0$ in units of $10^{14}\\text{ Hz}$",
            commonErrors: ["Subtracting the powers of ten incorrectly, giving $10^{1}$ or $10^{-1}$.", "Multiplying speed and wavelength."],
            examinerNote: "Allow $500 \\times 10^{12}\\text{ Hz}$ oe. Allow 1 mark for a correct answer with no working.",
          },
        },
        {
          id: "eph10-u3-em-spectrum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Gamma rays are used to sterilise surgical instruments, but workers who handle the source must be protected. Explain why gamma rays can be used to sterilise equipment and why they are dangerous to people.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ionising radiation", statement: "Gamma rays are ionising: they can remove electrons from atoms and damage molecules such as DNA." },
            ],
            steps: [
              { reasoning: "Gamma rays have a very high frequency and carry a lot of energy, so they are ionising.", marks: 1, markCode: "B" },
              { reasoning: "They kill bacteria and other microorganisms on the instruments by damaging their cells, so the equipment is sterilised.", marks: 1, markCode: "B" },
              { reasoning: "In humans, gamma rays can enter and damage or kill healthy cells.", marks: 1, markCode: "B" },
              { reasoning: "They can damage DNA, causing mutations, which may lead to cancer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Gamma rays are ionising and kill microbes by damaging their cells, so equipment is sterilised; in people they damage cells and DNA, causing mutation and cancer.",
            commonErrors: ["Saying that gamma rays 'burn' people; the damage is from ionisation of cells.", "Confusing gamma rays with the radioactive source itself."],
            examinerNote: "Allow 'kills cells' for the damage point. Reject 'makes people radioactive'.",
          },
        },
        {
          id: "eph10-u3-em-spectrum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A microwave oven uses microwaves of frequency $2.5 \\times 10^9\\text{ Hz}$. The speed of electromagnetic waves is $3.0 \\times 10^8\\text{ m/s}$.",
          parts: [
            { label: "a", prompt: "State the two types of electromagnetic wave that lie either side of microwaves in the spectrum.", marks: 2 },
            { label: "b", prompt: "Calculate the wavelength of the microwaves in metres.", marks: 3 },
            { label: "c", prompt: "Describe how microwaves cook food.", marks: 2 },
            { label: "d", prompt: "Explain why the door of the oven must be fitted with a metal screen.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$, so $\\lambda = \\frac{v}{f}$" },
              { kind: "property", name: "Microwaves", statement: "Microwaves are absorbed by water molecules, causing heating throughout the food. Metal reflects them." },
            ],
            steps: [
              { part: "a", reasoning: "Radio waves lie below microwaves (longer wavelength).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Infrared lies above microwaves (shorter wavelength).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rearrange for wavelength.", working: "\\lambda = \\frac{v}{f}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute the values.", working: "\\lambda = \\frac{3.0 \\times 10^8}{2.5 \\times 10^9}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\lambda = 0.12\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The microwaves are absorbed by water molecules in the food.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This transfers energy to the water, so the food heats up from inside as well as at the surface.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The metal screen reflects the microwaves back into the oven.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "This stops the microwaves escaping and heating (damaging) the cells of anyone nearby.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) radio waves and infrared (b) $0.12\\text{ m}$ (c) absorbed by water molecules, which heat the food (d) metal reflects microwaves so they cannot escape and harm people",
            commonErrors: ["Giving ultraviolet or visible light as the neighbour of microwaves.", "Saying that microwaves heat food by 'radiating heat' from the oven walls."],
            examinerNote: "In (a) the order of the answers does not matter. In (b) allow 0.1 or 12 cm. Allow ecf in (b) for a power of ten slip.",
          },
        },
      ],
    },
    {
      id: "eph10-u3-total-internal-reflection",
      title: "Total internal reflection and critical angle",
      skill: "Explain total internal reflection, calculate the critical angle with $\\sin c = \\frac{1}{n}$, and describe optical fibre uses.",
      lesson: {
        sections: [
          {
            heading: "The critical angle",
            body: "When light travels from a **denser** to a **less dense** medium (glass to air), it bends **away** from the normal. As the angle of incidence increases, the angle of refraction increases until it reaches $90^\\circ$, with the ray along the boundary. The angle of incidence at which this happens is the **critical angle**, $c$.\n\nFor a material with refractive index $n$ in air:\n\n$$\\sin c = \\frac{1}{n}$$\n\nFor glass with $n = 1.5$, $\\sin c = 0.667$, so $c = 41.8^\\circ$.",
          },
          {
            heading: "Total internal reflection",
            body: "**Total internal reflection (TIR)** happens only if both conditions are met:\n\n- light is travelling in the **denser** medium towards a boundary with a less dense medium\n- the angle of incidence is **greater than the critical angle**.\n\nThe light is then completely reflected back, obeying the law of reflection ($i = r$). If the angle of incidence is less than $c$, most light refracts out; at exactly $c$ the refracted ray travels along the boundary.",
          },
          {
            heading: "Uses",
            body: "**Optical fibres** have a thin glass core surrounded by a cladding of lower refractive index. Light hits the core boundary at an angle greater than $c$, so it is totally internally reflected again and again along the fibre, with almost no loss. Uses:\n\n- **communications**: telephone and internet signals carried by pulses of light or infrared\n- **endoscopes**: a bundle of fibres lets doctors see inside the body\n\nTIR is also used in prisms in binoculars and in reflectors on bicycles.",
          },
        ],
        keyFormulas: [
          { name: "Critical angle", statement: "$\\sin c = \\frac{1}{n}$" },
          { name: "Conditions for TIR", statement: "denser to less dense medium, and angle of incidence $> c$" },
          { name: "Refractive index from $c$", statement: "$n = \\frac{1}{\\sin c}$" },
        ],
        workedExample: {
          problem: "Water has a refractive index of $1.33$. Calculate the critical angle for a water-air boundary, to the nearest degree.",
          solution: "$\\sin c = \\frac{1}{1.33} = 0.7519$, so $c = \\sin^{-1}(0.7519) = 49^\\circ$.",
        },
      },
      questions: [
        {
          id: "eph10-u3-total-internal-reflection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of conditions is needed for total internal reflection to occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light goes from glass to air and the angle of incidence is less than the critical angle." },
              { id: "b", text: "Light goes from air to glass and the angle of incidence is greater than the critical angle." },
              { id: "c", text: "Light goes from glass to air and the angle of incidence is greater than the critical angle." },
              { id: "d", text: "Light goes from air to glass and the angle of incidence is less than the critical angle." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Total internal reflection", statement: "TIR needs light in the denser medium and an angle of incidence greater than the critical angle." },
            ],
            steps: [
              { reasoning: "Light must start in the denser medium (glass) and hit the boundary at an angle larger than $c$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Thinking that TIR can happen when light enters a denser medium.", "Reversing the inequality for the critical angle."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph10-u3-total-internal-reflection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Glass has a refractive index of $1.5$. Calculate the critical angle for a glass-air boundary. Give your answer to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [{ label: "Critical angle", answer: 41.8, tolerance: 0.1, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Critical angle", statement: "$\\sin c = \\frac{1}{n}$" },
            ],
            steps: [
              { reasoning: "Substitute the refractive index.", working: "\\sin c = \\frac{1}{1.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the sine.", working: "\\sin c = 0.6667", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse sine.", working: "c = \\sin^{-1}(0.6667) = 41.8^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$41.8^\\circ$",
            commonErrors: ["Using $\\sin c = n$, which is impossible for $n > 1$.", "Giving $\\frac{1}{1.5} = 0.67$ as the angle."],
            examinerNote: "Allow 42. A1 cao.",
          },
        },
        {
          id: "eph10-u3-total-internal-reflection-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The critical angle of a clear plastic is $40^\\circ$. Calculate the refractive index of the plastic. Use $\\sin 40^\\circ = 0.6428$. Give your answer to 2 decimal places.",
          response: {
            type: "numeric",
            parts: [{ label: "Refractive index", answer: 1.56, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Critical angle", statement: "$\\sin c = \\frac{1}{n}$, so $n = \\frac{1}{\\sin c}$" },
            ],
            steps: [
              { reasoning: "Rearrange the critical angle equation for $n$.", working: "n = \\frac{1}{\\sin c}", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "n = \\frac{1}{0.6428}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n = 1.56", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.56$",
            commonErrors: ["Calculating $\\sin 40^\\circ$ only, giving $0.64$.", "Using $n = \\sin c$."],
            examinerNote: "Allow 1.6 (ecf). Reject a unit.",
          },
        },
        {
          id: "eph10-u3-total-internal-reflection-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An optical fibre has a glass core of refractive index $1.46$ surrounded by cladding of lower refractive index. Light signals travel along the core.",
          parts: [
            { label: "a", prompt: "Calculate the critical angle for the core-air boundary. Use $\\sin 43.2^\\circ = 0.685$ to check your answer. Give your answer to 1 decimal place.", marks: 2 },
            { label: "b", prompt: "A ray hits the inside wall of the core at an angle of incidence of $60^\\circ$. State and explain what happens to the ray.", marks: 2 },
            { label: "c", prompt: "Another ray hits the wall at $30^\\circ$. State what happens to this ray.", marks: 1 },
            { label: "d", prompt: "Explain why the core is surrounded by cladding of lower refractive index, instead of being left bare.", marks: 2 },
            { label: "e", prompt: "Describe one use of optical fibres in medicine.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Critical angle", statement: "$\\sin c = \\frac{1}{n}$" },
              { kind: "principle", name: "Total internal reflection", statement: "TIR occurs in the denser medium when the angle of incidence exceeds $c$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into the critical angle equation: $\\sin c = \\frac{1}{1.46} = 0.685$.", working: "\\sin c = \\frac{1}{1.46}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the inverse sine.", working: "c = \\sin^{-1}(0.685) = 43.2^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$60^\\circ$ is greater than the critical angle of $43.2^\\circ$.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "So the ray is totally internally reflected back into the core.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$30^\\circ$ is less than $c$, so the ray mostly refracts out of the core (and the signal is lost).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The cladding protects the surface of the core from scratches and dirt, which would let light escape.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It stops light leaking into a neighbouring fibre, and keeps the critical angle boundary at the core-cladding interface so TIR still occurs.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "An endoscope uses a bundle of optical fibres, which is passed into the body through a small opening.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Light travels down some fibres to illuminate the inside and the image returns along others, so doctors can see inside without major surgery.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $43.2^\\circ$ (b) angle exceeds $c$, so totally internally reflected (c) refracts out (d) protects the core and prevents signal leakage between fibres (e) endoscope for viewing inside the body",
            commonErrors: ["Saying that a $30^\\circ$ ray is totally internally reflected.", "Saying that TIR happens because the ray is 'trapped' with no mention of the critical angle."],
            examinerNote: "In (a) allow 43. In (d) allow 'prevents signals crossing over between fibres' oe. In (e) allow keyhole surgery.",
          },
        },
      ],
    },
  ],
};
