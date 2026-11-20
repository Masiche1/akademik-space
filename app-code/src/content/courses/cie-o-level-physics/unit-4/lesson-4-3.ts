import type { Lesson } from "../../../types.ts";

export const lessonp43: Lesson = {
  id: "olphys-u4-lesson-4-3",
  code: "4-3",
  title: "Light Waves and Electromagnetic Spectrum",
  goal: "I CAN describe the electromagnetic spectrum and explain light wave properties.",
  standards: ["5054 4.3"],
  vocabulary: [
    { term: "Electromagnetic wave", definition: "Transverse wave carrying energy — no medium needed." },
    { term: "Spectrum", definition: "Range of EM waves ordered by frequency/wavelength." },
    { term: "Radio waves", definition: "Lowest frequency, longest wavelength — communication." },
    { term: "Microwaves", definition: "Used in cooking, satellite communication." },
    { term: "Infrared", definition: "Heat radiation — remote controls, thermal imaging." },
    { term: "Visible light", definition: "Only EM waves human eye detects (400-700 nm)." },
    { term: "Ultraviolet", definition: "High energy — causes sunburn, used in sterilisation." },
    { term: "X-rays/gamma", definition: "Highest frequency — medical imaging, cancer treatment." },
  ],
  concepts: [
    {
      id: "olphys-u4-em-spectrum",
      title: "Electromagnetic spectrum",
      skill: "Describe the EM spectrum and uses of each region.",
      lesson: {
        sections: [
          {
            heading: "EM waves",
            body: "Transverse waves that travel through **vacuum** at 3×10⁸ m/s.\n\nAll EM waves: same speed, different frequency/wavelength/energy.",
          },
          {
            heading: "Spectrum order",
            body: "**Radio → Microwave → Infrared → Visible → UV → X-ray → Gamma**\n\n- Low freq/long λ → high freq/short λ\n- Low energy → high energy\n- Uses: communication → imaging → sterilisation",
          },
          {
            heading: "Key uses",
            body: "- Radio: TV/radio broadcast\n- Microwave: cooking, satellite\n- Infrared: heat, remote control\n- Visible: sight\n- UV: sterilisation, suntan\n- X-ray: medical imaging\n- Gamma: cancer radiotherapy",
          },
        ],
        keyFormulas: [
          { name: "EM speed", statement: "$c = 3 \\times 10^8\\ \\text{m/s}$" },
          { name: "Wave equation", statement: "$c = f\\lambda$" },
        ],
        workedExample: {
          problem: "An EM wave has wavelength 0.5 m. Find frequency.",
          solution: "f = c/λ = 3×10⁸/0.5 = 6×10⁸ Hz (radio wave region).",
        },
      },
      questions: [
        {
          id: "olphys-u4-em-spectrum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which EM wave has the highest frequency?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Radio" }, { id: "b", text: "Infrared" }, { id: "c", text: "Visible" }, { id: "d", text: "Gamma" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Spectrum", statement: "Gamma highest freq." }],
            steps: [{ reasoning: "Recall.", working: "\\gamma \\text{ highest}", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Gamma",
            commonErrors: ["Confusing frequency with wavelength order."],
          },
        },
        {
          id: "olphys-u4-em-spectrum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two uses of infrared radiation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Infrared", statement: "Heat, remote control, imaging." }],
            steps: [
              { reasoning: "Any two valid uses.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heating/thermal imaging and remote controls (or night vision, cooking).",
            commonErrors: ["Giving visible light uses."],
          },
        },
        {
          id: "olphys-u4-em-spectrum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An EM wave has wavelength 300 nm. Find frequency. (c=3×10⁸ m/s)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave", statement: "f = c/λ." }],
            steps: [
              { reasoning: "λ = 300 nm = 3×10⁻⁷ m.", marks: 1, markCode: "M" },
              { reasoning: "f = 3×10⁸/3×10⁻⁷.", marks: 1, markCode: "M" },
              { reasoning: "= 10¹⁵ Hz.", marks: 1, markCode: "A" },
              { reasoning: "Unit Hz.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "10¹⁵ Hz (UV region)",
            commonErrors: ["Not converting nm to m."],
          },
        },
        {
          id: "olphys-u4-em-spectrum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the electromagnetic spectrum and its uses.",
          parts: [
            { label: "a", prompt: "List spectrum order.", marks: 3 },
            { label: "b", prompt: "State speed of EM waves.", marks: 3 },
            { label: "c", prompt: "Give three uses of different regions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "EM spectrum", statement: "Radio→gamma order; c=3×10⁸; various uses." }],
            steps: [
              { part: "a", reasoning: "Correct order.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Low→high freq.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "3×10⁸ m/s.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vacuum same for all.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any three valid uses.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct regions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) radio→gamma (b) 3×10⁸ m/s (c) uses",
            commonErrors: ["In (b) saying different speeds."],
          },
        },
      ],
    },
    {
      id: "olphys-u4-light-waves",
      title: "Light wave properties",
      skill: "Describe light as EM wave and its properties.",
      lesson: {
        sections: [
          {
            heading: "Light nature",
            body: "Visible light = EM waves 400-700 nm. Transverse wave, travels at 3×10⁸ m/s in vacuum.\n\nBehaves as wave (interference, diffraction) and particle (photons) — wave-particle duality.",
          },
          {
            heading: "Colour",
            body: "White light = all colours. Prism splits into spectrum: red→violet.\n\n- Red: longest λ, lowest freq\n- Violet: shortest λ, highest freq\n- Each colour has characteristic wavelength",
          },
          {
            heading: "Light interactions",
            body: "- **Reflection**: bounce off surface\n- **Refraction**: bend entering different medium\n- **Dispersion**: split into colours (prism)\n- **Absorption**: energy transferred to object",
          },
        ],
        keyFormulas: [
          { name: "Light speed", statement: "$c = 3 \\times 10^8\\ \\text{m/s}$" },
        ],
        workedExample: {
          problem: "Light travels 1.5×10¹¹ m to Sun. Time?",
          solution: "t = d/v = 1.5×10¹¹/3×10⁸ = 500 s ≈ 8.3 min.",
        },
      },
      questions: [
        {
          id: "olphys-u4-light-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is white light made of?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only red" }, { id: "b", text: "All colours combined" }, { id: "c", text: "Only blue" }, { id: "d", text: "No colours" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Light", statement: "White = all colours." }],
            steps: [{ reasoning: "Recall.", working: "\\text{all colours}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** All colours combined",
            commonErrors: ["White is not absence of colour."],
          },
        },
        {
          id: "olphys-u4-light-waves-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when white light passes through a prism?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Dispersion", statement: "Splits into spectrum." }],
            steps: [
              { reasoning: "Dispersion splits colours.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It disperses into a spectrum of colours (red to violet) because different wavelengths refract differently.",
            commonErrors: ["Saying 'absorbed' — dispersed."],
          },
        },
        {
          id: "olphys-u4-light-waves-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Light travels 3×10⁸ m in 1 s. How far in 0.5 s?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Light", statement: "d = ct." }],
            steps: [
              { reasoning: "d = 3×10⁸ × 0.5.", marks: 1, markCode: "M" },
              { reasoning: "= 1.5×10⁸ m.", marks: 1, markCode: "A" },
              { reasoning: "Correct.", marks: 1, markCode: "B" },
              { reasoning: "Unit m.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1.5×10⁸ m",
            commonErrors: ["Doubling instead of halving."],
          },
        },
        {
          id: "olphys-u4-light-waves-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe light as a wave and its properties.",
          parts: [
            { label: "a", prompt: "What type of wave is light?", marks: 3 },
            { label: "b", prompt: "Explain dispersion.", marks: 3 },
            { label: "c", prompt: "State speed of light.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Light", statement: "EM transverse wave; dispersion; c=3×10⁸." }],
            steps: [
              { part: "a", reasoning: "EM transverse wave.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Visible spectrum range.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Prism splits colours.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Different λ refract differently.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "3×10⁸ m/s.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vacuum.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) EM transverse (b) prism dispersion (c) 3×10⁸ m/s",
            commonErrors: ["In (a) saying longitudinal."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u4-light-notes",
      title: "Light and EM spectrum — revision notes",
      summary: "EM spectrum order, light properties, dispersion.",
      sections: [
        {
          heading: "Key facts",
          body: "EM: radio→gamma. All c=3×10⁸ m/s. White light=all colours. Prism→spectrum. Uses: communication→imaging.",
        },
        {
          heading: "Exam technique",
          body: "- v=fλ for EM waves too.\n- Higher freq = higher energy.\n- Dispersion = wavelength-dependent refraction.",
        },
      ],
    },
  ],
};
