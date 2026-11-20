import type { Lesson } from "../../../types.ts";

export const lessonp42: Lesson = {
  id: "olphys-u4-lesson-4-2",
  code: "4-2",
  title: "Sound Waves",
  goal: "I CAN explain sound production, transmission and properties of sound waves.",
  standards: ["5054 4.2"],
  vocabulary: [
    { term: "Sound", definition: "Longitudinal wave produced by vibrating objects." },
    { term: "Vibration", definition: "Rapid back-and-forth motion producing sound." },
    { term: "Frequency", definition: "Number of oscillations per second (Hz) — determines pitch." },
    { term: "Amplitude", definition: "Maximum displacement — determines loudness." },
    { term: "Ultrasound", definition: "Sound above human hearing (>20 kHz)." },
    { term: "Echo", definition: "Reflected sound wave." },
    { term: "Sonar", definition: "Sound navigation and ranging — uses echoes." },
    { term: "Compression", definition: "High-pressure region in longitudinal wave." },
  ],
  concepts: [
    {
      id: "olphys-u4-sound",
      title: "Sound waves",
      skill: "Explain sound production, transmission and properties.",
      lesson: {
        sections: [
          {
            heading: "Production",
            body: "Sound produced by **vibrating objects** — guitar strings, vocal cords, speaker cone.\n\nVibration → compressions and rarefactions in air → longitudinal wave travels.",
          },
          {
            heading: "Properties",
            body: "- **Pitch**: frequency (higher freq = higher pitch)\n- **Loudness**: amplitude (larger amplitude = louder)\n- **Speed**: ~330 m/s in air, faster in solids/liquids\n- Needs medium — cannot travel in vacuum",
          },
          {
            heading: "Ultrasound and echoes",
            body: "Ultrasound (>20 kHz) used for:\n- Medical imaging (pregnancy scans)\n- Sonar (ships, bats)\n- Cleaning delicate objects\n\nEcho: sound reflected from surface. Distance = (speed × time)/2.",
          },
        ],
        keyFormulas: [
          { name: "Echo distance", statement: "$d = \\dfrac{v \\times t}{2}$" },
          { name: "Wave speed", statement: "$v = f \\times \\lambda$" },
        ],
        workedExample: {
          problem: "Echo returns after 0.4 s. Speed of sound = 330 m/s. Distance to wall?",
          solution: "d = (330 × 0.4)/2 = 132/2 = 66 m.",
        },
      },
      questions: [
        {
          id: "olphys-u4-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What produces sound?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Heat" }, { id: "b", text: "Vibrating objects" }, { id: "c", text: "Light" }, { id: "d", text: "Static electricity" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Sound", statement: "Vibration produces sound." }],
            steps: [{ reasoning: "Recall.", working: "\\text{vibration} \\to \\text{sound}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Vibrating objects",
            commonErrors: ["Sound needs vibration not heat."],
          },
        },
        {
          id: "olphys-u4-sound-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What determines the pitch of a sound?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Pitch", statement: "Higher frequency = higher pitch." }],
            steps: [
              { reasoning: "Frequency determines pitch.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frequency — higher frequency gives higher pitch.",
            commonErrors: ["Confusing with amplitude (loudness)."],
          },
        },
        {
          id: "olphys-u4-sound-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An echo returns after 0.5 s. Speed of sound 340 m/s. Calculate distance to reflecting surface.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Echo", statement: "d = vt/2." }],
            steps: [
              { reasoning: "d = (340 × 0.5)/2.", marks: 1, markCode: "M" },
              { reasoning: "= 170/2.", marks: 1, markCode: "M" },
              { reasoning: "= 85 m.", marks: 1, markCode: "A" },
              { reasoning: "Unit m.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "85 m",
            commonErrors: ["Forgetting to halve for round trip."],
          },
        },
        {
          id: "olphys-u4-sound-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain properties and uses of sound waves.",
          parts: [
            { label: "a", prompt: "How is sound produced?", marks: 3 },
            { label: "b", prompt: "What determines pitch and loudness?", marks: 3 },
            { label: "c", prompt: "Give two uses of ultrasound.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Sound", statement: "Vibration; freq→pitch, amp→loudness; ultrasound uses." }],
            steps: [
              { part: "a", reasoning: "Vibrating object.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compressional wave.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pitch=frequency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Loudness=amplitude.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Medical imaging.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sonar/cleaning.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) vibration→compressions (b) pitch=freq, loudness=amp (c) imaging, sonar",
            commonErrors: ["In (b) swapping pitch/loudness factors."],
          },
        },
      ],
    },
    {
      id: "olphys-u4-wave-calculations",
      title: "Wave properties and calculations",
      skill: "Apply wave equation and describe wave behaviour.",
      lesson: {
        sections: [
          {
            heading: "Wave equation",
            body: "**v = fλ** — wave speed = frequency × wavelength.\n\n- v in m/s, f in Hz, λ in m\n- Same wave: if f increases, λ decreases (v constant in same medium)",
          },
          {
            heading: "Wave behaviour",
            body: "- **Reflection**: bounce off surface (echo, mirror)\n- **Refraction**: bend entering different medium (speed change)\n- **Diffraction**: spread through gap/wavelength comparable",
          },
          {
            heading: "Electromagnetic waves",
            body: "Light, radio, X-rays — travel through vacuum at 3×10⁸ m/s.\n\nSpectrum: radio → microwave → infrared → visible → UV → X-ray → gamma.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f \\lambda$" },
        ],
        workedExample: {
          problem: "A wave has frequency 500 Hz and wavelength 0.68 m. Find speed.",
          solution: "v = fλ = 500 × 0.68 = 340 m/s (speed of sound in air).",
        },
      },
      questions: [
        {
          id: "olphys-u4-wave-calculations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the wave equation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "v = f/λ" }, { id: "b", text: "v = fλ" }, { id: "c", text: "v = f + λ" }, { id: "d", text: "v = f²λ" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave", statement: "v = fλ." }],
            steps: [{ reasoning: "Recall.", working: "v = f\\lambda", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** v = fλ",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "olphys-u4-wave-calculations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate wave speed if f = 1000 Hz and λ = 0.34 m.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave", statement: "v = fλ." }],
            steps: [
              { reasoning: "v = 1000 × 0.34.", working: "1000 \\times 0.34", marks: 1, markCode: "M" },
              { reasoning: "= 340 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "340 m/s",
            commonErrors: ["Unit errors — Hz×m = m/s."],
          },
        },
        {
          id: "olphys-u4-wave-calculations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sound wave has speed 340 m/s and frequency 680 Hz. Find wavelength.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave", statement: "λ = v/f." }],
            steps: [
              { reasoning: "λ = 340/680.", marks: 1, markCode: "M" },
              { reasoning: "= 0.5 m.", marks: 1, markCode: "A" },
              { reasoning: "Correct.", marks: 1, markCode: "B" },
              { reasoning: "Unit m.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "0.5 m",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olphys-u4-wave-calculations-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply the wave equation and describe wave behaviours.",
          parts: [
            { label: "a", prompt: "v=fλ calculation.", marks: 3 },
            { label: "b", prompt: "Describe reflection.", marks: 3 },
            { label: "c", prompt: "Describe refraction and diffraction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave", statement: "v=fλ; reflection/refraction/diffraction." }],
            steps: [
              { part: "a", reasoning: "v=fλ.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct calc.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Bounce off surface.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Angle in=angle out.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Refraction: bend at boundary.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Diffraction: spread through gap.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) v=fλ (b) reflection (c) refraction/diffraction",
            commonErrors: ["In (c) confusing refraction with diffraction."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u4-sound-notes",
      title: "Sound and wave properties — revision notes",
      summary: "Sound=vibration, pitch=freq, loudness=amp, v=fλ.",
      sections: [
        {
          heading: "Key facts",
          body: "Sound=longitudinal from vibration. Pitch=frequency, loudness=amplitude. v=fλ universal. Echo distance=vt/2. Ultrasound>20kHz.",
        },
        {
          heading: "Exam technique",
          body: "- v=fλ rearrange for any variable.\n- Echo: halve total distance.\n- EM waves: same speed all frequencies.",
        },
      ],
    },
  ],
};
