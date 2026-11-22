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
              { id: "a", text: "$v = f + \\lambda$" },
              { id: "b", text: "$v = f\\lambda$" },
              { id: "c", text: "$v = \\lambda/f$" },
              { id: "d", text: "$v = f/\\lambda$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u4-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which wave is transverse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compression pulse in a spring" },
              { id: "b", text: "Sound in air" },
              { id: "c", text: "Electromagnetic wave in vacuum" },
              { id: "d", text: "Ultrasound in water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Transverse wave", statement: "Oscillation is perpendicular to the direction of propagation." }],
            steps: [{ reasoning: "EM waves have oscillating fields perpendicular to travel.", marks: 1, markCode: "A" }],
            finalAnswer: "Electromagnetic wave",
          },
        },
        {
          id: "cial-p-u4-pr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Light in vacuum has wavelength $0.5\\ m$. What is its frequency? Take $c = 3 \\times 10^8\\ m\\ s^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.5 \\times 10^8\\ Hz$" },
              { id: "b", text: "$6 \\times 10^8\\ Hz$" },
              { id: "c", text: "$1.5 \\times 10^9\\ Hz$" },
              { id: "d", text: "$6 \\times 10^{-8}\\ Hz$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Wave equation", statement: "$f = c/\\lambda$ for EM waves in vacuum." }],
            steps: [{ reasoning: "$f = 3\\times10^8/0.5 = 6\\times10^8\\ Hz$.", marks: 1, markCode: "A" }],
            finalAnswer: "$6 \\times 10^8\\ Hz$",
          },
        },
        {
          id: "cial-p-u4-pr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a longitudinal wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light" },
              { id: "b", text: "Sound in air" },
              { id: "c", text: "Radio wave" },
              { id: "d", text: "X-ray" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Longitudinal wave", statement: "Particle oscillation is parallel to propagation." }],
            steps: [{ reasoning: "Sound is a longitudinal mechanical wave.", marks: 1, markCode: "A" }],
            finalAnswer: "Sound in air",
          },
        },
        {
          id: "cial-p-u4-pr-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pair is in order of increasing frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ultraviolet, visible, infrared" },
              { id: "b", text: "Infrared, visible, ultraviolet" },
              { id: "c", text: "Visible, infrared, ultraviolet" },
              { id: "d", text: "Radio, gamma, microwave" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM spectrum", statement: "Radio < microwave < infrared < visible < ultraviolet < X-ray < gamma in frequency." }],
            steps: [{ reasoning: "Infrared has lower frequency than visible; visible lower than UV.", marks: 1, markCode: "A" }],
            finalAnswer: "Infrared, visible, ultraviolet",
          },
        },
        {
          id: "cial-p-u4-pr-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Light enters a medium of refractive index $n$. Its speed in the medium is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = n/c$" },
              { id: "b", text: "$v = c - n$" },
              { id: "c", text: "$v = nc$" },
              { id: "d", text: "$v = c/n$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Refractive index", statement: "$n = c/v$, so $v = c/n$." }],
            steps: [{ reasoning: "Refractive index relates speed in vacuum to speed in medium.", marks: 1, markCode: "A" }],
            finalAnswer: "$v = c/n$",
          },
        },
        {
          id: "cial-p-u4-pr-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sound wave travels at $340\\ m\\ s^{-1}$ and has frequency $850\\ Hz$. Calculate its wavelength.",
          response: { type: "numeric", parts: [{ label: "wavelength", answer: 0.4, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Wave equation", statement: "$\\lambda = v/f$." }],
            steps: [
              { reasoning: "$\\lambda = 340/850$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 0.4\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 0.4\\ m$",
          },
        },
        {
          id: "cial-p-u4-pr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wave has wavelength $2.0\\ m$ and speed $340\\ m\\ s^{-1}$. Calculate its frequency.",
          response: { type: "numeric", parts: [{ label: "frequency", answer: 170, unit: "Hz" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Wave equation", statement: "$f = v/\\lambda$." }],
            steps: [
              { reasoning: "$f = 340/2.0$.", marks: 1, markCode: "M" },
              { reasoning: "$f = 170\\ Hz$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f = 170\\ Hz$",
          },
        },
        {
          id: "cial-p-u4-pr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "An EM wave has frequency $6.0 \\times 10^{14}\\ Hz$. Calculate its wavelength in vacuum.",
          response: { type: "numeric", parts: [{ label: "wavelength", answer: 5e-7, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "law", name: "EM waves", statement: "$v = c = f\\lambda$ in vacuum." }],
            steps: [
              { reasoning: "Use $\\lambda = c/f$ with $c = 3\\times10^8\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 3\\times10^8/(6.0\\times10^{14})$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 5.0\\times10^{-7}\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 5.0\\times10^{-7}\\ m$",
          },
        },
        {
          id: "cial-p-u4-pr-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Light travels through glass of refractive index $1.5$. Calculate its speed in the glass.",
          response: { type: "numeric", parts: [{ label: "speed", answer: 2e8, unit: "m s^{-1}" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Refractive index", statement: "$v = c/n$." }],
            steps: [
              { reasoning: "$v = 3\\times10^8/1.5$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 2.0\\times10^8\\ m\\ s^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 2.0\\times10^8\\ m\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u4-pr-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A wave has frequency $250\\ Hz$. Calculate its period.",
          response: { type: "numeric", parts: [{ label: "period", answer: 0.004, unit: "s" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Period", statement: "$T = 1/f$." }],
            steps: [
              { reasoning: "$T = 1/250$.", marks: 1, markCode: "M" },
              { reasoning: "$T = 4.0\\times10^{-3}\\ s$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T = 4.0\\times10^{-3}\\ s$",
          },
        },
        {
          id: "cial-p-u4-pr-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sound wave travels at $340\\ m\\ s^{-1}$ for $2.5\\ s$. Calculate the distance travelled.",
          response: { type: "numeric", parts: [{ label: "distance", answer: 850, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Wave speed", statement: "$s = vt$." }],
            steps: [
              { reasoning: "$s = 340 \\times 2.5$.", marks: 1, markCode: "M" },
              { reasoning: "$s = 850\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$s = 850\\ m$",
          },
        },
        {
          id: "cial-p-u4-pr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A wave in one medium has wavelength $1.7\\ m$ at frequency $200\\ Hz$. Its frequency is doubled while the wave speed stays the same. Calculate the new wavelength.",
          response: { type: "numeric", parts: [{ label: "new wavelength", answer: 0.85, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Wave equation", statement: "$v = f\\lambda$; constant $v$ means $\\lambda \\propto 1/f$." }],
            steps: [
              { reasoning: "Speed is unchanged, so wavelength is inversely proportional to frequency.", marks: 1, markCode: "M" },
              { reasoning: "Doubling $f$ halves $\\lambda$: $1.7/2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda_{new} = 0.85\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda_{new} = 0.85\\ m$",
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
              { id: "a", text: "$n_1\\cos\\theta_1 = n_2\\cos\\theta_2$" },
              { id: "b", text: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" },
              { id: "c", text: "$v_1 = v_2$" },
              { id: "d", text: "$f_1 = f_2$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u4-rd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the law of reflection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Angle of incidence equals angle of reflection" },
              { id: "b", text: "Reflected ray is always perpendicular to incident ray" },
              { id: "c", text: "Angle of incidence equals 90° minus angle of reflection" },
              { id: "d", text: "Frequency changes on reflection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Reflection", statement: "Angle of incidence = angle of reflection, both from the normal." }],
            steps: [{ reasoning: "The law of reflection applies to all waves.", marks: 1, markCode: "A" }],
            finalAnswer: "Angle of incidence = angle of reflection",
          },
        },
        {
          id: "cial-p-u4-rd-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does refractive index $n$ measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n = v/c$" },
              { id: "b", text: "$n = f\\lambda$" },
              { id: "c", text: "$n = c/v$" },
              { id: "d", text: "$n = \\sin C$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Refractive index", statement: "$n = c/v$." }],
            steps: [{ reasoning: "Refractive index is the ratio of speed in vacuum to speed in medium.", marks: 1, markCode: "A" }],
            finalAnswer: "$n = c/v$",
          },
        },
        {
          id: "cial-p-u4-rd-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a medium of refractive index $n$, the critical angle $C$ satisfies:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\cos C = 1/n$" },
              { id: "b", text: "$\\tan C = n$" },
              { id: "c", text: "$\\sin C = 1/n$" },
              { id: "d", text: "$\\sin C = n$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Critical angle", statement: "$\\sin C = 1/n$ when going to a less dense medium." }],
            steps: [{ reasoning: "At the critical angle the refracted ray is at 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sin C = 1/n$",
          },
        },
        {
          id: "cial-p-u4-rd-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When light refracts at a boundary, which quantity remains unchanged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wavelength" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Frequency" },
              { id: "d", text: "Direction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Refraction", statement: "Frequency is unchanged; speed and wavelength change." }],
            steps: [{ reasoning: "The wave frequency is set by the source and stays constant across the boundary.", marks: 1, markCode: "A" }],
            finalAnswer: "Frequency",
          },
        },
        {
          id: "cial-p-u4-rd-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the laws of reflection and refraction, angles are measured from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The surface" },
              { id: "b", text: "The normal" },
              { id: "c", text: "The incident ray" },
              { id: "d", text: "The boundary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Normal", statement: "Angles of incidence and refraction are measured from the normal." }],
            steps: [{ reasoning: "All wave angles are taken from the normal to the surface.", marks: 1, markCode: "A" }],
            finalAnswer: "The normal",
          },
        },
        {
          id: "cial-p-u4-rd-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Total internal reflection can only occur when light travels:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In a vacuum" },
              { id: "b", text: "From a less dense to a more dense medium" },
              { id: "c", text: "From a more dense to a less dense medium" },
              { id: "d", text: "Parallel to the surface" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "TIR", statement: "TIR requires going from higher $n$ to lower $n$ at angle > critical." }],
            steps: [{ reasoning: "Light must travel into the less dense medium.", marks: 1, markCode: "A" }],
            finalAnswer: "Dense to less dense medium",
          },
        },
        {
          id: "cial-p-u4-rd-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The refractive index of a glass block is $1.5$. Calculate its critical angle.",
          response: { type: "numeric", parts: [{ label: "critical angle", answer: 41.8, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Critical angle", statement: "$\\sin C = 1/n$." }],
            steps: [
              { reasoning: "$\\sin C = 1/1.5 = 0.667$.", marks: 1, markCode: "M" },
              { reasoning: "$C = 41.8°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C = 41.8°$",
          },
        },
        {
          id: "cial-p-u4-rd-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Light travelling in air enters a medium of refractive index $2.0$ at an angle of incidence of $30°$. Calculate the angle of refraction.",
          response: { type: "numeric", parts: [{ label: "angle of refraction", answer: 14.5, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$." }],
            steps: [
              { reasoning: "$\\sin\\theta_2 = \\sin 30°/2.0 = 0.25$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta_2 = 14.5°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta_2 = 14.5°$",
          },
        },
        {
          id: "cial-p-u4-rd-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the frequency of light stays constant when it passes from air into water, even though its speed and wavelength change.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Refraction", statement: "Frequency is set by the source; $v=f\\lambda$ so $\\lambda$ adjusts." }],
            steps: [
              { reasoning: "Frequency is determined by the source and does not depend on the medium.", marks: 1, markCode: "M" },
              { reasoning: "In water light slows down, so $v$ decreases.", marks: 1, markCode: "M" },
              { reasoning: "Since $f$ is fixed, $\\lambda = v/f$ decreases to keep $v=f\\lambda$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "f fixed by source; λ and v change",
          },
        },
        {
          id: "cial-p-u4-rd-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how total internal reflection is used to guide light along an optical fibre, stating the conditions required.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "TIR", statement: "$\\sin C = 1/n$; occurs at boundary going to less dense medium." }],
            steps: [
              { reasoning: "Core has higher refractive index than cladding.", marks: 1, markCode: "M" },
              { reasoning: "Light strikes inner boundary at angle greater than the critical angle.", marks: 1, markCode: "M" },
              { reasoning: "All light is reflected back into the core — no refraction out.", marks: 1, markCode: "M" },
              { reasoning: "Repeated TIR guides the signal along the fibre with little loss.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "TIR at core–cladding boundary guides light",
          },
        },
        {
          id: "cial-p-u4-rd-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following waves undergoes the greatest diffraction when passing through a small aperture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visible light" },
              { id: "b", text: "Radio waves" },
              { id: "c", text: "Gamma rays" },
              { id: "d", text: "X-rays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffraction", statement: "Diffraction is greatest when wavelength is comparable to aperture size." }],
            steps: [{ reasoning: "Radio waves have much longer wavelengths than light or X-rays.", marks: 1, markCode: "A" }],
            finalAnswer: "Radio waves",
          },
        },
        {
          id: "cial-p-u4-rd-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which type of reflection produces a clear image in a plane mirror?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Specular reflection" },
              { id: "b", text: "Diffuse reflection" },
              { id: "c", text: "Total internal reflection" },
              { id: "d", text: "Scattering" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Specular reflection", statement: "Reflection from a smooth surface gives a clear image." }],
            steps: [{ reasoning: "Specular (mirror-like) reflection forms images; diffuse does not.", marks: 1, markCode: "A" }],
            finalAnswer: "Specular reflection",
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
