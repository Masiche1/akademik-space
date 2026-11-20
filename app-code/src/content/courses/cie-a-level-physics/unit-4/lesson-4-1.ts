import type { Lesson } from "../../../types.ts";

export const lesson411: Lesson = {
  id: "cial-p-u4-lesson-4-1",
  code: "4-1",
  title: "Progressive waves",
  goal: "I CAN describe wave properties, wave equation and wave phenomena.",
  standards: ["9702 8: waves"],
  vocabulary: [
    { term: "Wave", definition: "Disturbance transferring energy without transferring matter." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium — $A$ (m)." },
    { term: "Wavelength", definition: "Distance between adjacent crests — $\\lambda$ (m)." },
    { term: "Frequency", definition: "Oscillations per second — $f$ (Hz)." },
    { term: "Wave speed", definition: "$v = f\\lambda$ (m/s)." },
    { term: "Transverse/longitudinal", definition: "Oscillation perpendicular vs parallel to propagation." },
  ],
  concepts: [
    {
      id: "cial-p-u4-progressive",
      title: "Wave properties",
      skill: "Apply $v = f\\lambda$ and describe transverse and longitudinal waves.",
      lesson: {
        sections: [
          {
            heading: "Wave equation",
            body: "$v = f\\lambda$ — wave speed = frequency × wavelength. For same medium: $v$ constant → $f \\propto 1/\\lambda$. EM waves in vacuum: $v = c = 3 \\times 10^8\\ m\\ s^{-1}$. Sound in air: ~340 m/s.",
          },
          {
            heading: "Transverse vs longitudinal",
            body: "Transverse: oscillation perpendicular to propagation (EM waves, waves on string). Longitudinal: oscillation parallel (sound, ultrasound). Both transfer energy, not matter.",
          },
          {
            heading: "Wave types",
            body: "Mechanical waves need medium (sound, water). Electromagnetic waves don't (light, radio, X-ray). All EM waves same speed in vacuum; differ in wavelength/frequency. Spectrum: radio → microwave → IR → visible → UV → X-ray → gamma.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          { name: "c", statement: "$3 \\times 10^8\\ m\\ s^{-1}$" },
        ],
        workedExample: {
          problem: "A wave has frequency 500 Hz and wavelength 0.68 m. Find speed.",
          solution: "$v = f\\lambda = 500 \\times 0.68 = 340\\ m\\ s^{-1}$ (sound in air).",
        },
      },
      questions: [
        {
          id: "cial-p-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the wave equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = f\\lambda$" },
              { id: "b", text: "$v = f/\\lambda$" },
              { id: "c", text: "$v = \\lambda/f$" },
              { id: "d", text: "$v = f + \\lambda$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Wave equation", statement: "$v = f\\lambda$." }],
            steps: [{ reasoning: "v = fλ.", marks: 1, markCode: "A" }],
            finalAnswer: "$v = f\\lambda$",
          },
        },
        {
          id: "cial-p-u4-pr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sound wave has frequency 1000 Hz and speed 340 m/s. Find wavelength.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Wave equation", statement: "$\\lambda = v/f$." }],
            steps: [
              { reasoning: "$\\lambda = v/f = 340/1000$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 0.34\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Units correct (m).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 0.34\\ m$",
          },
        },
        {
          id: "cial-p-u4-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do all EM waves travel at the same speed in vacuum?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "EM waves", statement: "c = 3×10⁸ m/s — determined by vacuum permittivity/permeability." }],
            steps: [
              { reasoning: "EM waves are self-propagating E and B fields.", marks: 1, markCode: "M" },
              { reasoning: "Speed set by vacuum properties, not frequency.", marks: 1, markCode: "M" },
              { reasoning: "$c = 1/\\sqrt{\\mu_0 \\varepsilon_0}$ — constant.", marks: 1, markCode: "M" },
              { reasoning: "Different wavelengths but same speed in vacuum.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Speed set by vacuum constants",
          },
        },
        {
          id: "cial-p-u4-pr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Waves.",
          parts: [
            { label: "a", prompt: "State the wave equation.", marks: 1 },
            { label: "b", prompt: "Distinguish transverse and longitudinal waves with examples.", marks: 3 },
            { label: "c", prompt: "Which EM waves need a medium?", marks: 1 },
            { label: "d", prompt: "A wave has $f = 200\\ Hz$, $\\lambda = 1.7\\ m$. Find speed.", marks: 2 },
            { label: "e", prompt: "Name the EM spectrum in order of increasing frequency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Waves", statement: "$v=f\\lambda$; transverse vs longitudinal." }],
            steps: [
              { part: "a", reasoning: "$v = f\\lambda$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Transverse: perpendicular (EM, string); longitudinal: parallel (sound).", marks: 3, markCode: "A" },
              { part: "c", reasoning: "None — EM waves don't need medium.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$v = 200 \\times 1.7 = 340\\ m\\ s^{-1}$.", marks: 2, markCode: "M" },
              { part: "e", reasoning: "Radio→microwave→IR→visible→UV→X-ray→gamma.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) v=fλ (b) transverse/longitudinal (c) none (d) 340 m/s (e) spectrum order",
          },
        },
      ],
    },
    {
      id: "cial-p-u4-phenomena",
      title: "Reflection, refraction and diffraction",
      skill: "Apply reflection, refraction (Snell's law) and diffraction principles.",
      lesson: {
        sections: [
          {
            heading: "Reflection",
            body: "Angle of incidence = angle of reflection (both measured from normal). Specular (smooth) vs diffuse (rough) reflection. Law of reflection applies to all waves.",
          },
          {
            heading: "Refraction",
            body: "Snell's law: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$. Refractive index $n = c/v$ — higher n = slower wave = more bending toward normal. Frequency unchanged; wavelength and speed change. Critical angle: $\\sin C = 1/n$ — basis of optical fibres.",
          },
          {
            heading: "Diffraction",
            body: "Bending around obstacles/apertures. Significant when aperture ≈ wavelength. Longer wavelengths diffract more. Applications: radio around buildings, electron diffraction.",
          },
        ],
        keyFormulas: [
          { name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" },
          { name: "Refractive index", statement: "$n = c/v$" },
          { name: "Critical angle", statement: "$\\sin C = 1/n$" },
        ],
        workedExample: {
          problem: "Light enters glass (n=1.5) at 30° from air. Find angle in glass.",
          solution: "$1 \\times \\sin 30° = 1.5 \\sin\\theta_2$ → $\\sin\\theta_2 = 0.5/1.5 = 0.333$ → $\\theta_2 = 19.5°$.",
        },
      },
      questions: [
        {
          id: "cial-p-u4-rd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Snell's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" },
              { id: "b", text: "$n_1\\cos\\theta_1 = n_2\\cos\\theta_2$" },
              { id: "c", text: "$v_1 = v_2$" },
              { id: "d", text: "$f_1 = f_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$." }],
            steps: [{ reasoning: "Snell's law relates angles and refractive indices.", marks: 1, markCode: "A" }],
            finalAnswer: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$",
          },
        },
        {
          id: "cial-p-u4-rd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Light in air (n=1) hits glass (n=1.5) at 45°. Find angle of refraction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$." }],
            steps: [
              { reasoning: "$\\sin\\theta_2 = \\sin 45°/1.5 = 0.707/1.5 = 0.471$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta_2 = 28.1°$.", marks: 1, markCode: "M" },
              { reasoning: "Bends toward normal (denser medium).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta_2 = 28.1°$",
          },
        },
        {
          id: "cial-p-u4-rd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is critical angle and when does total internal reflection occur?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "TIR", statement: "$\\sin C = 1/n$; occurs when going dense→less dense." }],
            steps: [
              { reasoning: "Critical angle: angle where refraction = 90°.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin C = n_2/n_1$ for n1 > n2.", marks: 1, markCode: "M" },
              { reasoning: "TIR when angle > critical and going to less dense medium.", marks: 1, markCode: "M" },
              { reasoning: "Basis of optical fibres.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Angle > critical → TIR",
          },
        },
        {
          id: "cial-p-u4-rd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Wave phenomena.",
          parts: [
            { label: "a", prompt: "State law of reflection.", marks: 1 },
            { label: "b", prompt: "State Snell's law.", marks: 2 },
            { label: "c", prompt: "What is critical angle? Give formula.", marks: 2 },
            { label: "d", prompt: "Why do radio waves diffract more than light?", marks: 2 },
            { label: "e", prompt: "What happens to frequency when light refracts?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Wave phenomena", statement: "Reflection, refraction, diffraction." }],
            steps: [
              { part: "a", reasoning: "Angle of incidence = angle of reflection.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Angle where refraction = 90°.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\sin C = 1/n$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Radio λ ~ metres; light λ ~ nm.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Diffraction significant when λ ≈ aperture size.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Frequency unchanged.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Speed and wavelength change instead.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) i=r (b) Snell (c) sinC=1/n (d) λ≈aperture (e) f unchanged",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u4-waves-notes",
      title: "Progressive waves — revision notes",
      summary: "Wave equation, reflection, refraction, diffraction.",
      sections: [
        {
          heading: "Wave basics",
          body: "$v = f\\lambda$. Transverse (EM, string) vs longitudinal (sound). EM waves all same speed in vacuum; differ in λ/f.",
        },
        {
          heading: "Phenomena",
          body: "Reflection: i = r. Refraction: Snell's law $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$; $n = c/v$. Critical angle $\\sin C = 1/n$ → TIR. Diffraction: significant when λ ≈ aperture.",
        },
        {
          heading: "Exam checklist",
          body: "Frequency never changes on refraction — speed and wavelength do. Angles measured from normal.",
        },
      ],
    },
  ],
};
