import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ediasphys-u2-lesson-2-1",
  code: "2-1",
  title: "Wave Properties",
  goal: "I CAN describe reflection, refraction, diffraction and the wave equation v = fλ.",
  standards: ["P2 Waves and optics", "Wave behaviour"],
  vocabulary: [
    { term: "Wavelength (λ)", definition: "Distance between successive crests, in metres." },
    { term: "Frequency (f)", definition: "Number of oscillations per second, in hertz." },
    { term: "Amplitude (A)", definition: "Maximum displacement from equilibrium." },
    { term: "Refraction", definition: "Change in direction/speed of wave crossing between media." },
  ],
  concepts: [
    {
      id: "ediasphys-u2-wave-basics",
      title: "Wave equation and wave properties",
      skill: "Use v = fλ and describe reflection, refraction and diffraction.",
      lesson: {
        sections: [
          {
            heading: "Wave equation",
            body: "v = fλ where v = speed (m/s), f = frequency (Hz), λ = wavelength (m). For EM waves in vacuum c = 3×10⁸ m/s. Frequency is set by source — unchanged across media; speed and wavelength change in refraction.",
          },
          {
            heading: "Reflection and refraction",
            body: "Reflection: angle of incidence = angle of reflection; specular (smooth) vs diffuse (rough). Refraction: wave bends toward normal entering denser medium (slower), away leaving; Snell's law n₁sinθ₁ = n₂sinθ₂. Refractive index n = c/v.",
          },
          {
            heading: "Diffraction",
            body: "Waves spread when passing through gaps/apertures comparable to λ. Significant diffraction when gap ≈ λ. Longer wavelengths diffract more. Explains radio reception around obstacles; why sound bends around corners.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "v = fλ" },
          { name: "Key formula", statement: "n = c/v" },
          { name: "Key formula", statement: "n₁sinθ₁ = n₂sinθ₂" },
        ],
        workedExample: {
          problem: "A wave has f = 5 Hz and λ = 2 m. Find v.",
          solution: "v = fλ = 5×2 = 10 m/s.",
        },
      },
      questions: [
        {
          id: "ediasphys-wave-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the wave equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "v = f/λ" },
              { id: "b", text: "v = fλ" },
              { id: "c", text: "v = λ/f" },
              { id: "d", text: "v = f+λ" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Wave equation", statement: "v = fλ." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** v = fλ",
          },
        },
        {
          id: "ediasphys-wave-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A wave travels at 340 m/s with wavelength 0.68 m. Calculate frequency.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 500, tolerance: 1, unit: "Hz" }] },
          markscheme: {
            principles: [{ kind: "method", name: "Wave equation", statement: "f = v/λ." }],
            steps: [
              { reasoning: "f = v/λ = 340/0.68.", marks: 1, markCode: "M" },
              { reasoning: "= 500 Hz.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 Hz",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "ediasphys-wave-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a wave bends toward the normal when entering a denser medium.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Refraction", statement: "Slower speed → shorter λ → bends toward normal." }],
            steps: [
              { reasoning: "Denser medium → lower wave speed → shorter wavelength (f unchanged).", marks: 1, markCode: "M" },
              { reasoning: "Wavefronts hit boundary at angle → one end slows first → direction changes.", marks: 1, markCode: "M" },
              { reasoning: "Bends toward normal (lower n side has higher speed).", marks: 1, markCode: "A" },
              { reasoning: "Snell's law describes quantitatively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speed decreases → λ decreases → bends toward normal",
            commonErrors: ["Saying frequency changes."],
          },
        },
        {
          id: "ediasphys-wave-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare reflection, refraction and diffraction of waves.",
          parts: [
            { label: "a", prompt: "Describe each phenomenon.", marks: 4 },
            { label: "b", prompt: "State what changes in each.", marks: 3 },
            { label: "c", prompt: "Give one example of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Wave phenomena", statement: "Direction/speed/spreading." }],
            steps: [
              { part: "a", reasoning: "Reflection: wave bounces off surface; angle i = angle r.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Refraction: bends at boundary between media.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diffraction: spreads through gap/aperture.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All wave behaviours.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reflection: direction changes, speed/f/λ same.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Refraction: speed and λ change, f constant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Diffraction: spreads; wavelength unchanged.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflection: mirror/echo.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Refraction: straw bent in water/prism.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Diffraction: radio around building/sound through door.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflect: direction; refract: speed/λ; diffract: spread",
            commonErrors: ["Confusing refraction and diffraction."],
          },
        },
      ],
    },
    {
      id: "ediasphys-u2-em",
      title: "Electromagnetic spectrum",
      skill: "Describe the EM spectrum, wave-particle duality and uses of each region.",
      lesson: {
        sections: [
          {
            heading: "EM spectrum",
            body: "All EM waves travel at c = 3×10⁸ m/s in vacuum. Regions by wavelength: radio (>1 m) → microwave (mm–m) → infrared (nm–mm) → visible (400–700 nm) → UV (10–400 nm) → X-ray (0.01–10 nm) → gamma (<0.01 nm). All transverse waves; need no medium.",
          },
          {
            heading: "Properties",
            body: "Wavelength increases left-to-right in diagram (radio longest, gamma shortest). Frequency inversely proportional: f = c/λ. Energy E = hf increases with frequency. Visible light only small band; most EM invisible.",
          },
          {
            heading: "Uses and dangers",
            body: "Radio: communication. Microwave: cooking, satellite. IR: remote controls, thermal imaging. Visible: vision. UV: sterilisation, causes sunburn/cancer. X-ray: imaging, ionising. Gamma: radiotherapy, sterilisation — most ionising/dangerous.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "c = fλ" },
          { name: "Key formula", statement: "E = hf" },
          { name: "Key formula", statement: "f = c/λ" },
        ],
        workedExample: {
          problem: "Calculate frequency of 600 nm light.",
          solution: "f = c/λ = 3×10⁸/(600×10⁻⁹) = 5×10¹⁴ Hz.",
        },
      },
      questions: [
        {
          id: "ediasphys-em-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which has the longest wavelength in the EM spectrum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma" },
              { id: "b", text: "X-ray" },
              { id: "c", text: "Radio" },
              { id: "d", text: "Visible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM spectrum", statement: "Radio longest, gamma shortest." }],
            steps: [{ reasoning: "Radio waves metres to km.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Radio",
          },
        },
        {
          id: "ediasphys-em-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the frequency of a wave with λ = 0.1 m.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 3e9, tolerance: 1, unit: "Hz" }] },
          markscheme: {
            principles: [{ kind: "method", name: "EM wave", statement: "f = c/λ." }],
            steps: [
              { reasoning: "f = 3×10⁸/0.1.", marks: 1, markCode: "M" },
              { reasoning: "= 3×10⁹ Hz.", marks: 1, markCode: "M" },
              { reasoning: "Answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3×10⁹ Hz",
            commonErrors: ["Using wrong c."],
          },
        },
        {
          id: "ediasphys-em-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gamma rays are more dangerous than radio waves.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "EM energy", statement: "E = hf — higher f → higher energy." }],
            steps: [
              { reasoning: "Gamma has very high frequency → very high photon energy.", marks: 1, markCode: "M" },
              { reasoning: "Can ionise atoms/damage DNA → cancer, mutation.", marks: 1, markCode: "M" },
              { reasoning: "Radio photons have tiny energy → non-ionising, safe.", marks: 1, markCode: "A" },
              { reasoning: "Conclude danger ∝ photon energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "γ high f → ionising; radio low f → safe",
            commonErrors: ["Saying all EM is dangerous."],
          },
        },
        {
          id: "ediasphys-em-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the electromagnetic spectrum and the relationship between wavelength, frequency and energy.",
          parts: [
            { label: "a", prompt: "Order the regions by wavelength.", marks: 3 },
            { label: "b", prompt: "State speed in vacuum and the wave equation.", marks: 3 },
            { label: "c", prompt: "Explain energy relationship and give one use each of two regions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "EM spectrum", statement: "Radio→γ; c=fλ; E=hf." }],
            steps: [
              { part: "a", reasoning: "Radio, microwave, infrared, visible, UV, X-ray, gamma.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Radio longest; gamma shortest.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Correct order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "c = 3×10⁸ m/s in vacuum.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "v = fλ; for EM f=c/λ.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All regions same speed in vacuum.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "E = hf → energy increases with frequency (decreases with λ).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Radio: communication; UV: sterilisation (any two).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second use.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Radio→γ; c=fλ; E=hf",
            commonErrors: ["Reversing λ/f order."],
          },
        },
      ],
    },
  ],
};
