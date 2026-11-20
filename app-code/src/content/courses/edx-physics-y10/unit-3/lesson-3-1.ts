import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eph10-u3-lesson-3-1",
  code: "3-1",
  title: "Wave Properties, Reflection and Refraction",
  goal: "I CAN describe transverse and longitudinal waves, use $v = f\\lambda$, and use the law of reflection and Snell's law for refraction.",
  standards: ["4PH1 4.1", "4PH1 4.2", "4PH1 4.3", "4PH1 4.4", "4PH1 4.5"],
  vocabulary: [
    { term: "Wavelength, $\\lambda$", definition: "The distance from a point on one wave to the same point on the next wave, for example crest to crest. Measured in metres, $\\text{m}$." },
    { term: "Frequency, $f$", definition: "The number of complete waves passing a point each second. Measured in hertz, $\\text{Hz}$." },
    { term: "Amplitude", definition: "The maximum displacement of a point on a wave from its undisturbed (rest) position." },
    { term: "Transverse wave", definition: "A wave in which the vibrations are at right angles to the direction of energy transfer, for example light and water waves." },
    { term: "Longitudinal wave", definition: "A wave in which the vibrations are parallel to the direction of energy transfer, for example sound, with compressions and rarefactions." },
    { term: "Refraction", definition: "The change in direction of a wave when it passes from one medium into another, caused by a change in wave speed." },
    { term: "Refractive index, $n$", definition: "For light entering a material from air, $n = \\frac{\\sin i}{\\sin r}$. A larger $n$ means the light bends more towards the normal." },
  ],
  concepts: [
    {
      id: "eph10-u3-wave-properties",
      title: "Wave properties and $v = f\\lambda$",
      skill: "Describe transverse and longitudinal waves, define wavelength, frequency and amplitude, and use $v = f\\lambda$.",
      lesson: {
        sections: [
          {
            heading: "Describing waves",
            body: "Waves **transfer energy** from place to place without transferring matter. The particles of the medium only vibrate about a fixed position.\n\n- **Amplitude**: maximum displacement from the rest position.\n- **Wavelength**, $\\lambda$: the distance between the same point on two adjacent waves, such as crest to crest.\n- **Frequency**, $f$: the number of waves passing a point per second, in hertz ($\\text{Hz}$).\n- **Wave speed**, $v$: the distance travelled by a wave each second, in $\\text{m/s}$.",
          },
          {
            heading: "Transverse and longitudinal waves",
            body: "In a **transverse** wave the vibrations are at **right angles** to the direction the wave travels. Light, all electromagnetic waves, water ripples and waves on a rope are transverse.\n\nIn a **longitudinal** wave the vibrations are **parallel** to the direction the wave travels. The wave is a series of **compressions** (particles close together) and **rarefactions** (particles spread out). Sound and the push-pull wave on a slinky spring are longitudinal.",
          },
          {
            heading: "The wave equation",
            body: "Wave speed, frequency and wavelength are linked by\n\n$$v = f\\lambda$$\n\nwhere $v$ is in $\\text{m/s}$, $f$ is in $\\text{Hz}$ and $\\lambda$ is in $\\text{m}$. Always convert wavelengths in $\\text{cm}$ to $\\text{m}$ before substituting. In a ripple tank, a wave of fixed frequency that moves into shallower water slows down, so its wavelength decreases while its frequency stays the same.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          { name: "Frequency", statement: "$f = \\frac{\\text{number of waves}}{\\text{time}}$" },
          { name: "Transverse vs longitudinal", statement: "transverse: vibration $\\perp$ direction of travel; longitudinal: vibration $\\parallel$ direction of travel" },
        ],
        workedExample: {
          problem: "A wave has frequency $50\\text{ Hz}$ and wavelength $6.0\\text{ m}$. Calculate its speed.",
          solution: "$v = f\\lambda = 50 \\times 6.0 = 300\\text{ m/s}$.",
        },
      },
      questions: [
        {
          id: "eph10-u3-wave-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a longitudinal wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Ripples on water" },
              { id: "d", text: "Radio waves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Longitudinal wave", statement: "In a longitudinal wave the vibrations are parallel to the direction of energy transfer." },
            ],
            steps: [
              { reasoning: "Sound is a series of compressions and rarefactions along the direction of travel. Light, water ripples and radio waves are all transverse.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sound",
            commonErrors: ["Choosing (c) because water appears to move up and down along the wave; water ripples are transverse."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph10-u3-wave-properties-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sound wave has a frequency of $250\\text{ Hz}$ and a wavelength of $1.2\\text{ m}$. Calculate the speed of the wave.",
          response: {
            type: "numeric",
            parts: [{ label: "Wave speed", answer: 300, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { reasoning: "Substitute the frequency and wavelength into the wave equation.", working: "v = f\\lambda = 250 \\times 1.2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "v = 300\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300\\text{ m/s}$",
            commonErrors: ["Dividing instead of multiplying, giving $208\\text{ m/s}$."],
            examinerNote: "A1 for 300 with the unit. Allow 1 mark for a correct answer with no working.",
          },
        },
        {
          id: "eph10-u3-wave-properties-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Water waves in a ripple tank travel at $0.30\\text{ m/s}$. The wavelength is $1.5\\text{ cm}$. Calculate the frequency of the waves in hertz.",
          response: {
            type: "numeric",
            parts: [{ label: "Frequency", answer: 20, unit: "Hz" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$, so $f = \\frac{v}{\\lambda}$" },
            ],
            steps: [
              { reasoning: "Convert the wavelength to metres.", working: "1.5\\text{ cm} = 0.015\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange and substitute.", working: "f = \\frac{v}{\\lambda} = \\frac{0.30}{0.015}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f = 20\\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\text{ Hz}$",
            commonErrors: ["Not converting centimetres to metres, giving $0.2\\text{ Hz}$.", "Multiplying speed by wavelength."],
            examinerNote: "Allow full marks for 20 Hz with correct working. If the conversion is missed, award the second M mark only (ecf).",
          },
        },
        {
          id: "eph10-u3-wave-properties-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student studies water waves in a ripple tank. A vibrating bar makes straight waves. The student counts the waves passing a fixed point on the screen.",
          parts: [
            { label: "a", prompt: "Name the quantity measured by the distance between two adjacent crests.", marks: 1 },
            { label: "b", prompt: "$24$ waves pass the fixed point in $8.0\\text{ s}$. Calculate the frequency of the waves.", marks: 2 },
            { label: "c", prompt: "The wavelength is $0.050\\text{ m}$. Calculate the speed of the waves.", marks: 2 },
            { label: "d", prompt: "The frequency is increased to $6.0\\text{ Hz}$ and the wave speed stays the same. Calculate the new wavelength in metres.", marks: 2 },
            { label: "e", prompt: "The student measures the distance across $10$ wavelengths and divides by $10$ to find the wavelength. Explain why this gives a more reliable value than measuring one wavelength.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frequency", statement: "Frequency is the number of waves passing a point per second: $f = \\frac{N}{t}$." },
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { part: "a", reasoning: "Crest to adjacent crest is one full wave.", working: "\\text{wavelength}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the number of waves by the time.", working: "f = \\frac{24}{8.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "f = 3.0\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the wave equation.", working: "v = f\\lambda = 3.0 \\times 0.050", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "v = 0.15\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Rearrange the wave equation for wavelength.", working: "\\lambda = \\frac{v}{f} = \\frac{0.15}{6.0}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "\\lambda = 0.025\\text{ m}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "A single wavelength is small, so a small error in reading the ruler is a large fraction of it.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Measuring across 10 waves makes the error a much smaller fraction; dividing by 10 gives the mean wavelength.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) wavelength (b) $3.0\\text{ Hz}$ (c) $0.15\\text{ m/s}$ (d) $0.025\\text{ m}$ (e) reduces the percentage error in the reading, giving a mean value",
            commonErrors: ["Giving amplitude in (a).", "Thinking that doubling the frequency doubles the wavelength; at fixed speed it halves the wavelength."],
            examinerNote: "In (d) allow ecf from a wrong speed in (c). In (e) allow 'reduces the percentage uncertainty' oe.",
          },
        },
      ],
    },
    {
      id: "eph10-u3-reflection-refraction",
      title: "Reflection, refraction and Snell's law",
      skill: "Use the law of reflection and calculate refractive index with $n = \\frac{\\sin i}{\\sin r}$.",
      lesson: {
        sections: [
          {
            heading: "Reflection",
            body: "When a wave hits a surface it can be **reflected**. The **law of reflection** states that the angle of incidence equals the angle of reflection:\n\n$$i = r$$\n\nBoth angles are measured from the **normal**, an imaginary line at $90^\\circ$ to the surface at the point where the ray hits. A smooth surface gives a clear reflection; a rough surface scatters light in many directions.",
          },
          {
            heading: "Refraction",
            body: "**Refraction** is the change in direction of a wave when it enters a different medium at an angle. It happens because the wave **speed changes**.\n\n- Into a denser medium (air to glass): the wave **slows down** and bends **towards** the normal.\n- Into a less dense medium (glass to air): the wave **speeds up** and bends **away** from the normal.\n\nIf a wave enters along the normal ($i = 0^\\circ$) its speed changes but it does not change direction. Frequency stays the same; wavelength changes.",
          },
          {
            heading: "Snell's law",
            body: "For light going from air into a material, the **refractive index** is\n\n$$n = \\frac{\\sin i}{\\sin r}$$\n\nwhere $i$ is the angle of incidence in air and $r$ is the angle of refraction in the material, both measured from the normal. Glass has $n \\approx 1.5$, water $n \\approx 1.33$. A **higher** refractive index means more bending.\n\nUseful values: $\\sin 30^\\circ = 0.5$, $\\sin 45^\\circ = 0.7071$, $\\sin 60^\\circ = 0.8660$.",
          },
        ],
        keyFormulas: [
          { name: "Law of reflection", statement: "angle of incidence $=$ angle of reflection" },
          { name: "Refractive index", statement: "$n = \\frac{\\sin i}{\\sin r}$" },
          { name: "Direction of bending", statement: "slower medium: towards the normal; faster medium: away from the normal" },
        ],
        workedExample: {
          problem: "A ray of light enters glass at $i = 60^\\circ$ and refracts at $r = 35^\\circ$. Calculate the refractive index, to 2 decimal places.",
          solution: "$n = \\frac{\\sin 60^\\circ}{\\sin 35^\\circ} = \\frac{0.8660}{0.5736} = 1.51$.",
        },
      },
      questions: [
        {
          id: "eph10-u3-reflection-refraction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ray of light travels from air into glass at an angle to the surface. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ray speeds up and bends away from the normal." },
              { id: "b", text: "The ray slows down and bends towards the normal." },
              { id: "c", text: "The ray slows down and bends away from the normal." },
              { id: "d", text: "The ray keeps the same speed and bends towards the normal." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Refraction", statement: "Entering a denser medium, a wave slows down and bends towards the normal." },
            ],
            steps: [
              { reasoning: "Glass is optically denser than air, so light slows down and bends towards the normal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The ray slows down and bends towards the normal.",
            commonErrors: ["Thinking light speeds up in glass.", "Forgetting that refraction is caused by a change in speed."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph10-u3-reflection-refraction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ray of light in air hits a block of plastic with angle of incidence $45^\\circ$. The angle of refraction is $30^\\circ$. Calculate the refractive index of the plastic. Give your answer to 2 decimal places.",
          response: {
            type: "numeric",
            parts: [{ label: "Refractive index", answer: 1.41, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Snell's law", statement: "$n = \\frac{\\sin i}{\\sin r}$" },
            ],
            steps: [
              { reasoning: "Substitute the angles.", working: "n = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{0.7071}{0.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The refractive index has no unit.", working: "n = 1.41", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.41$",
            commonErrors: ["Dividing the angles ($45 \\div 30 = 1.5$) instead of their sines.", "Inverting the fraction, giving $0.71$."],
            examinerNote: "Allow 1.4. Reject any unit.",
          },
        },
        {
          id: "eph10-u3-reflection-refraction-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Light travels from air into glass of refractive index $1.5$. The angle of incidence is $45^\\circ$. Calculate the angle of refraction. Give your answer to the nearest degree.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle of refraction", answer: 28, tolerance: 0.5, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Snell's law", statement: "$n = \\frac{\\sin i}{\\sin r}$, so $\\sin r = \\frac{\\sin i}{n}$" },
            ],
            steps: [
              { reasoning: "Rearrange and substitute.", working: "\\sin r = \\frac{\\sin 45^\\circ}{1.5} = \\frac{0.7071}{1.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the sine.", working: "\\sin r = 0.4714", marks: 1, markCode: "M" },
              { reasoning: "Use the inverse sine function.", working: "r = \\sin^{-1}(0.4714) = 28^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28^\\circ$",
            commonErrors: ["Stopping at $\\sin r = 0.47$ without finding the angle.", "Multiplying by $n$ instead of dividing, giving an impossible value."],
            examinerNote: "A1 for 28 (allow 28.1). The answer is smaller than 45, as expected when light bends towards the normal.",
          },
        },
        {
          id: "eph10-u3-reflection-refraction-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student shines a ray of light through a rectangular glass block and measures the angle of incidence $i$ and angle of refraction $r$. Results:\n\n| $i$ (degrees) | $r$ (degrees) |\n| --- | --- |\n| 20 | 13 |\n| 30 | 19 |\n| 40 | 25 |\n| 50 | 30 |",
          parts: [
            { label: "a", prompt: "State the line from which the angles $i$ and $r$ are measured.", marks: 1 },
            { label: "b", prompt: "Calculate the refractive index of the glass using the results for $i = 40^\\circ$. Use $\\sin 40^\\circ = 0.6428$ and $\\sin 25^\\circ = 0.4226$. Give your answer to 2 decimal places.", marks: 2 },
            { label: "c", prompt: "Describe how a graph of $\\sin i$ against $\\sin r$ could be used to find the refractive index.", marks: 2 },
            { label: "d", prompt: "Suggest one way to make the angle measurements more accurate.", marks: 1 },
            { label: "e", prompt: "The ray leaves the block back into air. Describe what happens to its speed and direction as it leaves the glass.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Snell's law", statement: "$n = \\frac{\\sin i}{\\sin r}$" },
              { kind: "principle", name: "Refraction", statement: "A wave leaving a denser medium speeds up and bends away from the normal." },
            ],
            steps: [
              { part: "a", reasoning: "Both angles are measured from the normal, not from the surface.", working: "\\text{the normal}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute into Snell's law.", working: "n = \\frac{\\sin 40^\\circ}{\\sin 25^\\circ} = \\frac{0.6428}{0.4226}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "n = 1.52", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Plot $\\sin i$ on the vertical axis against $\\sin r$ on the horizontal axis; the points lie on a straight line through the origin.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The gradient of the line equals the refractive index, since $\\sin i = n \\sin r$.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "For example: use a thinner ray, use a protractor with a finer scale, or mark the ray with a sharp pencil at several points far apart.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The light speeds up as it enters air.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It bends away from the normal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) the normal (b) $1.52$ (c) gradient of $\\sin i$ against $\\sin r$ equals $n$ (d) thin ray / sharp pencil marks (e) speeds up and bends away from the normal",
            commonErrors: ["Measuring the angles from the glass surface.", "Using the angles instead of their sines in the calculation.", "Saying that light slows down when leaving glass."],
            examinerNote: "In (b) allow 1.5. In (c) allow the axes either way round if the gradient is stated as $\\frac{1}{n}$ (oe). In (d) allow any sensible method that reduces reading error.",
          },
        },
      ],
    },
  ],
};
