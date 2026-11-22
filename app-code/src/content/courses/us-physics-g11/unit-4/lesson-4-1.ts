import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "phys11-u4-lesson-4-1",
  code: "4-1",
  title: "Wave Properties",
  goal: "I CAN describe transverse and longitudinal waves, use $v = f\\lambda$, and explain reflection, refraction, diffraction, interference and standing waves.",
  standards: ["HS-PS4-1", "SEP: Using Mathematics and Computational Thinking", "CCC: Cause and Effect"],
  vocabulary: [
    { term: "Transverse wave", definition: "A wave in which the particles of the medium vibrate at right angles to the direction the wave transfers energy." },
    { term: "Longitudinal wave", definition: "A wave in which the particles of the medium vibrate parallel to the direction the wave transfers energy, forming compressions and rarefactions." },
    { term: "Wavelength", definition: "The distance between two consecutive identical points on a wave, such as crest to crest. Symbol $\\lambda$, measured in meters." },
    { term: "Frequency", definition: "The number of complete waves passing a point each second, measured in hertz (Hz). Frequency is $f = 1/T$." },
    { term: "Amplitude", definition: "The maximum displacement of a particle from its rest position. A larger amplitude means the wave carries more energy." },
    { term: "Refraction", definition: "The change in direction of a wave when it passes from one medium into another because its speed changes." },
    { term: "Standing wave", definition: "A pattern formed when two identical waves travelling in opposite directions interfere, producing fixed nodes and antinodes." },
  ],
  concepts: [
    {
      id: "phys11-u4-wave-equation",
      title: "Wave types and the wave equation",
      skill: "Distinguish transverse and longitudinal waves and use $v = f\\lambda$, $T = 1/f$ and the link between amplitude and energy.",
      lesson: {
        sections: [
          {
            heading: "Waves transfer energy, not matter",
            body: "A wave moves energy from one place to another without moving the medium along with it. In a **transverse** wave (a rope shaken up and down, light) the vibration is at right angles to the direction of travel. In a **longitudinal** wave (sound, a pushed spring) the vibration is parallel to the direction of travel, producing regions of compression and rarefaction.\n\nSound needs a medium. Light and all other electromagnetic waves can travel through a vacuum.",
          },
          {
            heading: "Frequency, period, wavelength and speed",
            body: "The **period** $T$ is the time for one complete wave and the **frequency** $f$ is the number of waves per second, so $f = \\dfrac{1}{T}$.\n\nThe speed of a wave is the distance one wavelength travels in one period:\n\n$$v = f\\lambda$$\n\nThe speed depends on the medium, not on the source. If the frequency of a wave in a given medium rises, the wavelength must fall so that $v$ stays the same.",
          },
          {
            heading: "Amplitude and energy",
            body: "The **amplitude** is the maximum displacement from the rest position. The energy carried by a wave is proportional to the square of its amplitude, $E \\propto A^2$. Doubling the amplitude therefore makes the energy four times larger.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          { name: "Frequency and period", statement: "$f = \\dfrac{1}{T}$" },
          { name: "Energy and amplitude", statement: "$E \\propto A^2$" },
        ],
        workedExample: {
          problem: "A water wave has a frequency of $2.0\\ \\text{Hz}$ and a wavelength of $0.75\\ \\text{m}$. Find its speed and its period.",
          solution: "Speed: $v = f\\lambda = 2.0 \\times 0.75 = 1.5\\ \\text{m/s}$. Period: $T = \\dfrac{1}{f} = \\dfrac{1}{2.0} = 0.50\\ \\text{s}$.",
        },
      },
      questions: [
        {
          id: "phys11-u4-wave-equation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound travels through air as a longitudinal wave. Which statement describes the motion of the air particles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They vibrate parallel to the direction the wave travels." },
              { id: "b", text: "They do not move at all." },
              { id: "c", text: "They travel with the wave from the source to the listener." },
              { id: "d", text: "They vibrate at right angles to the direction the wave travels." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Longitudinal wave", statement: "The particles of the medium vibrate parallel to the direction of energy transfer." },
            ],
            steps: [
              { reasoning: "In a longitudinal wave the particles oscillate back and forth along the direction of travel, forming compressions and rarefactions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They vibrate parallel to the direction the wave travels.",
            commonErrors: ["Confusing longitudinal with transverse and choosing right angles.", "Thinking that the wave carries the particles along with it; only energy is transferred."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u4-wave-equation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tuning fork produces a sound of frequency $440\\ \\text{Hz}$. The wavelength of the sound in air is $0.78\\ \\text{m}$.\n\nCalculate the speed of the sound in air.",
          response: { type: "numeric", parts: [{ label: "Speed of sound", answer: 343.2, unit: "m/s", tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { reasoning: "Use the wave equation with the given frequency and wavelength.", working: "v = f\\lambda = 440 \\times 0.78", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "v = 343.2\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$343\\ \\text{m/s}$ (about $340\\ \\text{m/s}$)",
            commonErrors: ["Dividing frequency by wavelength: $440 / 0.78 = 564$.", "Forgetting units."],
            examinerNote: "M1 for $440 \\times 0.78$. A1 for 343 m/s (allow 340 m/s).",
          },
        },
        {
          id: "phys11-u4-wave-equation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A wave on a long rope has a period of $0.25\\ \\text{s}$ and a wavelength of $1.2\\ \\text{m}$.\n\nCalculate the frequency of the wave and the speed of the wave along the rope.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 4, unit: "Hz", tolerance: 0.01 },
              { label: "Wave speed", answer: 4.8, unit: "m/s", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency and period", statement: "$f = 1/T$" },
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { reasoning: "Frequency is the reciprocal of the period.", working: "f = \\frac{1}{T} = \\frac{1}{0.25} = 4.0\\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "Use the wave equation with this frequency.", working: "v = f\\lambda = 4.0 \\times 1.2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "v = 4.8\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f = 4.0\\ \\text{Hz}$, $v = 4.8\\ \\text{m/s}$",
            commonErrors: ["Using $v = \\lambda / T$ incorrectly as $1.2 \\times 0.25 = 0.30\\ \\text{m/s}$.", "Giving the frequency as 0.25 Hz by using the period directly."],
            examinerNote: "A1 for 4.0 Hz. M1 for $f\\lambda$ (or $\\lambda/T$). A1 for 4.8 m/s. Allow ecf from an incorrect frequency.",
          },
        },
        {
          id: "phys11-u4-wave-equation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student shakes one end of a long, stretched spring from side to side. Ten complete waves pass a marked point in $8.0\\ \\text{s}$. The student measures the wavelength as $0.60\\ \\text{m}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the waves.", marks: 2 },
            { label: "b", prompt: "Calculate the speed of the waves along the spring.", marks: 2 },
            { label: "c", prompt: "Calculate the time for a wave crest to travel the full $3.0\\ \\text{m}$ length of the spring.", marks: 2 },
            { label: "d", prompt: "The student now shakes the end with twice the amplitude but the same frequency. State the effect on the wave speed and on the energy carried, and explain your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$, and $v = d/t$ for steady motion." },
              { kind: "law", name: "Wave energy", statement: "The energy carried by a wave is proportional to the square of its amplitude." },
            ],
            steps: [
              { part: "a", reasoning: "Frequency is the number of waves per second.", working: "f = \\frac{10}{8.0}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with units.", working: "f = 1.25\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the wave equation.", working: "v = f\\lambda = 1.25 \\times 0.60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "v = 0.75\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Time equals distance divided by speed.", working: "t = \\frac{d}{v} = \\frac{3.0}{0.75}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "t = 4.0\\text{ s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Wave speed depends on the medium (the spring), not on the amplitude, so the speed is unchanged.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Energy is proportional to amplitude squared, so doubling the amplitude gives four times the energy.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1.25\\ \\text{Hz}$ (b) $0.75\\ \\text{m/s}$ (c) $4.0\\ \\text{s}$ (d) Speed unchanged; energy increases by a factor of 4.",
            commonErrors: ["In (a) dividing 8.0 by 10 to get the period 0.80 s and stopping there.", "In (d) saying the energy doubles, forgetting the square."],
            examinerNote: "(d) Allow 'speed stays the same because the medium is unchanged' oe. Reject 'energy doubles'.",
          },
        },
      ],
    },
    {
      id: "phys11-u4-wave-behavior",
      title: "Reflection, refraction, diffraction and interference",
      skill: "Apply Snell's law and explain refraction, total internal reflection, diffraction, interference and standing waves.",
      lesson: {
        sections: [
          {
            heading: "Reflection and refraction",
            body: "When a wave hits a boundary it can be **reflected**; the angle of incidence equals the angle of reflection, both measured from the normal.\n\nWhen a wave passes into a new medium its speed changes, so it **refracts**. Light entering a denser medium (higher index of refraction $n$) slows down and bends **toward** the normal. Snell's law gives the angles:\n\n$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$\n\nThe frequency does not change at a boundary. The speed and the wavelength do.",
          },
          {
            heading: "Total internal reflection",
            body: "When light travels from a higher index to a lower index, the refracted ray bends away from the normal. At the **critical angle** $\\theta_c$ the refracted ray runs along the boundary:\n\n$$\\sin\\theta_c = \\frac{n_2}{n_1}\\quad (n_1 > n_2)$$\n\nAt any larger angle of incidence all the light is reflected: **total internal reflection**.",
          },
          {
            heading: "Diffraction, interference and standing waves",
            body: "**Diffraction** is the spreading of a wave as it passes through a gap or around an obstacle. It is greatest when the gap is about the same size as the wavelength.\n\nWhen two waves overlap they **interfere**. If they arrive in phase (path difference of a whole number of wavelengths) they add: constructive interference. If they arrive half a wavelength out of phase they cancel: destructive interference.\n\nA **standing wave** forms when a wave and its reflection overlap. A string of length $L$ fixed at both ends has a fundamental with wavelength $\\lambda = 2L$.",
          },
        ],
        keyFormulas: [
          { name: "Snell's law", statement: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$" },
          { name: "Critical angle", statement: "$\\sin\\theta_c = n_2 / n_1$" },
          { name: "Constructive interference", statement: "path difference $= m\\lambda$, $m = 0, 1, 2, \\ldots$" },
          { name: "Fundamental on a fixed string", statement: "$\\lambda = 2L$" },
        ],
        workedExample: {
          problem: "A ray of light in air hits a glass block ($n = 1.50$) at $30^\\circ$ to the normal. Find the angle of refraction.",
          solution: "Use $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ with $n_1 = 1.00$. Then $\\sin\\theta_2 = \\dfrac{1.00 \\times \\sin 30^\\circ}{1.50} = \\dfrac{0.500}{1.50} = 0.333$, so $\\theta_2 = 19.5^\\circ$. The ray bends toward the normal because the glass is denser.",
        },
      },
      questions: [
        {
          id: "phys11-u4-wave-behavior-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ray of light passes from air into glass. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The light speeds up and bends toward the normal." },
              { id: "b", text: "The light slows down and bends toward the normal." },
              { id: "c", text: "The light changes frequency but keeps its speed." },
              { id: "d", text: "The light slows down and bends away from the normal." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Snell's law", statement: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$: entering a higher index medium makes the ray bend toward the normal." },
            ],
            steps: [
              { reasoning: "Glass has a higher index of refraction than air, so light travels more slowly in glass and the ray bends toward the normal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The light slows down and bends toward the normal.",
            commonErrors: ["Thinking light speeds up in a denser medium.", "Believing the frequency changes; it stays the same at a boundary."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u4-wave-behavior-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ray of light in air ($n = 1.00$) strikes the surface of water ($n = 1.33$) at an angle of incidence of $40^\\circ$.\n\nCalculate the angle of refraction. Give your answer to the nearest tenth of a degree.",
          response: { type: "numeric", parts: [{ label: "Angle of refraction", answer: 28.9, unit: "degrees", tolerance: 0.2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Snell's law", statement: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$" },
            ],
            steps: [
              { reasoning: "Write Snell's law and substitute the indices and the angle of incidence.", working: "1.00 \\times \\sin 40^\\circ = 1.33 \\times \\sin\\theta_2", marks: 1, markCode: "M" },
              { reasoning: "Rearrange for the sine of the refraction angle.", working: "\\sin\\theta_2 = \\frac{0.6428}{1.33} = 0.4833", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse sine.", working: "\\theta_2 = 28.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28.9^\\circ$",
            commonErrors: ["Using $\\theta_2 = \\theta_1 \\times n_1 / n_2$ without the sines.", "Multiplying by 1.33 instead of dividing, which gives an impossible answer."],
            examinerNote: "M1 for substitution. M1 for $\\sin\\theta_2 = 0.483$. A1 for $28.9^\\circ$ (allow 29).",
          },
        },
        {
          id: "phys11-u4-wave-behavior-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Light travels inside a glass block of index $n = 1.50$ toward a boundary with air ($n = 1.00$).\n\nState the condition on the indices needed for total internal reflection, calculate the critical angle for this boundary, and state what happens to a ray that strikes the boundary at $50^\\circ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Critical angle", statement: "$\\sin\\theta_c = n_2 / n_1$, with $n_1 > n_2$" },
              { kind: "principle", name: "Total internal reflection", statement: "If the angle of incidence exceeds $\\theta_c$, all the light is reflected back into the denser medium." },
            ],
            steps: [
              { reasoning: "Light must travel from a medium of higher index to one of lower index.", marks: 1, markCode: "B" },
              { reasoning: "Use the critical angle relation with $n_1 = 1.50$ and $n_2 = 1.00$.", working: "\\sin\\theta_c = \\frac{1.00}{1.50} = 0.6667", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse sine.", working: "\\theta_c = 41.8^\\circ", marks: 1, markCode: "A" },
              { reasoning: "$50^\\circ$ is greater than $41.8^\\circ$, so the ray undergoes total internal reflection and stays in the glass.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Light must go from higher to lower index; $\\theta_c = 41.8^\\circ$; at $50^\\circ$ the ray is totally internally reflected.",
            commonErrors: ["Inverting the ratio, $\\sin\\theta_c = 1.50 / 1.00$, which is greater than 1 and impossible.", "Saying the ray refracts out because $50^\\circ$ is a 'large' angle without comparing it with $\\theta_c$."],
            examinerNote: "B1 for higher to lower index (oe). M1 for ratio. A1 for 41.8 degrees (allow 42). R1 for comparing 50 degrees with the critical angle (ecf).",
          },
        },
        {
          id: "phys11-u4-wave-behavior-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two identical loudspeakers, $S_1$ and $S_2$, emit sound of frequency $686\\ \\text{Hz}$ in phase. The speed of sound in air is $343\\ \\text{m/s}$.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of the sound.", marks: 2 },
            { label: "b", prompt: "A listener stands at a point $3.0\\ \\text{m}$ from $S_1$ and $2.5\\ \\text{m}$ from $S_2$. Determine the path difference and state whether the sound is louder or quieter there. Explain.", marks: 2 },
            { label: "c", prompt: "A guitar string $1.2\\ \\text{m}$ long, fixed at both ends, supports waves of speed $96\\ \\text{m/s}$. Calculate the frequency of the fundamental standing wave.", marks: 2 },
            { label: "d", prompt: "Sound from a classroom is clearly heard around the corner of an open doorway $0.90\\ \\text{m}$ wide, but light from the room does not bend around the corner. Explain this difference in terms of wavelength.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v = f\\lambda$" },
              { kind: "principle", name: "Interference", statement: "A path difference of a whole number of wavelengths gives constructive interference; an odd number of half wavelengths gives destructive interference." },
              { kind: "principle", name: "Diffraction", statement: "Diffraction is significant when the gap is about the size of the wavelength or smaller." },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange the wave equation.", working: "\\lambda = \\frac{v}{f} = \\frac{343}{686}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\lambda = 0.50\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Path difference is the difference in distances: $3.0 - 2.5 = 0.50\\ \\text{m}$, which equals one wavelength.", working: "3.0 - 2.5 = 0.50\\text{ m} = 1\\lambda", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A whole number of wavelengths means the waves arrive in phase: constructive interference, so the sound is louder.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The fundamental on a fixed string has $\\lambda = 2L = 2.4\\ \\text{m}$; then use the wave equation.", working: "\\lambda = 2L = 2.4\\text{ m},\\quad f = \\frac{v}{\\lambda} = \\frac{96}{2.4}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "f = 40\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The sound wavelength (about $0.50\\ \\text{m}$) is comparable to the doorway width, so sound diffracts strongly around the edges.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The wavelength of visible light (about $5 \\times 10^{-7}\\ \\text{m}$) is far smaller than the doorway, so diffraction is negligible.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Therefore light travels in straight lines and does not bend noticeably around the corner.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.50\\ \\text{m}$ (b) path difference $0.50\\ \\text{m}$ = one wavelength, constructive interference, louder (c) $40\\ \\text{Hz}$ (d) Sound wavelength is comparable to the gap so it diffracts; light wavelength is tiny compared with the gap so it does not.",
            commonErrors: ["In (c) using $\\lambda = L$ instead of $2L$, which gives 80 Hz.", "In (b) saying the waves cancel because the path lengths are different."],
            examinerNote: "(b) Allow ecf from (a) for the number of wavelengths. (d) Reject 'light is faster than sound' as the explanation.",
          },
        },
      ],
    },
  ],
};
