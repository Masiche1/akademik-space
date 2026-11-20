import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "esc9-u3-lesson-3-1",
  code: "3-1",
  title: "Waves",
  goal: "I CAN describe transverse and longitudinal waves, use $v = f\\lambda$, and explain reflection and refraction of sound and light.",
  standards: ["KS3 Physics", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Transverse wave", definition: "A wave in which the oscillations are at right angles to the direction of energy transfer, for example light and water waves." },
    { term: "Longitudinal wave", definition: "A wave in which the oscillations are parallel to the direction of energy transfer, for example sound." },
    { term: "Wavelength", definition: "The distance from one point on a wave to the same point on the next wave, for example crest to crest. Measured in metres (m)." },
    { term: "Frequency", definition: "The number of complete waves passing a point each second. Measured in hertz (Hz)." },
    { term: "Amplitude", definition: "The maximum displacement of a point on a wave from its rest position." },
    { term: "Refraction", definition: "The change in direction of a wave when it passes from one medium into another, caused by a change in wave speed." },
    { term: "Normal", definition: "An imaginary line drawn at right angles to a surface where a ray meets it. All angles of rays are measured from the normal." },
  ],
  concepts: [
    {
      id: "esc9-u3-wave-properties-speed",
      title: "Wave types and wave speed",
      skill: "Distinguish transverse from longitudinal waves and calculate wave speed using $v = f\\lambda$.",
      lesson: {
        sections: [
          {
            heading: "Transverse and longitudinal waves",
            body: "Waves transfer **energy** from one place to another without transferring matter. In a **transverse** wave, such as a water wave or light, the particles (or fields) oscillate at right angles to the direction the wave travels. In a **longitudinal** wave, such as sound, the particles oscillate parallel to the direction of travel, forming regions of compression and rarefaction.",
          },
          {
            heading: "Describing a wave",
            body: "The **amplitude** is the maximum displacement from the rest position. The **wavelength** $\\lambda$ is the distance between the same point on two neighbouring waves. The **frequency** $f$ is the number of waves passing a point per second, measured in hertz (Hz). A frequency of 5 Hz means five complete waves pass every second.",
          },
          {
            heading: "The wave speed equation",
            body: "The speed of a wave is the product of its frequency and wavelength: $v = f\\lambda$. Speed is in $\\text{m/s}$, frequency in $\\text{Hz}$ and wavelength in $\\text{m}$. Rearranged, $f = \\frac{v}{\\lambda}$ and $\\lambda = \\frac{v}{f}$. To measure a wavelength accurately, measure the length of several waves and divide by the number of waves.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "$v = f\\lambda$ (wave speed in $\\text{m/s}$ = frequency in $\\text{Hz}$ $\\times$ wavelength in $\\text{m}$)" },
          { name: "Frequency from a count", statement: "$f = \\frac{\\text{number of waves}}{\\text{time in s}}$" },
        ],
        workedExample: {
          problem: "A wave on a rope has frequency 4.0 Hz and wavelength 0.75 m. Calculate its speed.",
          solution: "$v = f\\lambda = 4.0 \\times 0.75 = 3.0\\text{ m/s}$.",
        },
      },
      questions: [
        {
          id: "esc9-u3-wave-properties-speed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about a longitudinal wave is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The oscillations are at right angles to the direction of energy transfer." },
              { id: "b", text: "The oscillations are parallel to the direction of energy transfer." },
              { id: "c", text: "The particles of the medium travel with the wave from source to receiver." },
              { id: "d", text: "The wave can only travel through a vacuum." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Longitudinal wave", statement: "A wave whose oscillations are parallel to the direction of energy transfer." },
            ],
            steps: [
              { reasoning: "In a longitudinal wave, such as sound, particles vibrate backwards and forwards along the direction the wave travels.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The oscillations are parallel to the direction of energy transfer.",
            commonErrors: ["Choosing (a), which describes a transverse wave.", "Thinking that matter is carried along with the wave."],
            examinerNote: "B1 for (b) only.",
          },
        },
        {
          id: "esc9-u3-wave-properties-speed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A water wave has a frequency of 2.5 Hz and a wavelength of 0.80 m. Calculate the speed of the wave.",
          response: { type: "numeric", parts: [{ label: "Wave speed", answer: 2, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave speed equation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { reasoning: "Substitute the frequency and wavelength into the wave speed equation.", working: "v = f\\lambda = 2.5 \\times 0.80", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "v = 2.0\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0\\text{ m/s}$",
            commonErrors: ["Dividing frequency by wavelength to get 3.125.", "Omitting the unit."],
            examinerNote: "M1 for $2.5 \\times 0.80$. A1 for 2.0 with unit m/s. Allow 2 m/s.",
          },
        },
        {
          id: "esc9-u3-wave-properties-speed-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A wave on a spring travels at 1.5 m/s and has a wavelength of 0.30 m. Calculate the time taken for 40 complete waves to pass a fixed point.",
          response: { type: "numeric", parts: [{ label: "Time", answer: 8, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave speed equation", statement: "$v = f\\lambda$, so $f = \\frac{v}{\\lambda}$" },
              { kind: "formula", name: "Frequency", statement: "$f = \\frac{\\text{number of waves}}{\\text{time}}$, so $t = \\frac{\\text{number of waves}}{f}$" },
            ],
            steps: [
              { reasoning: "Rearrange the wave speed equation to find the frequency.", working: "f = \\frac{v}{\\lambda} = \\frac{1.5}{0.30} = 5.0\\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Frequency is waves per second, so time is the number of waves divided by the frequency.", working: "t = \\frac{40}{5.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "t = 8.0\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.0\\text{ s}$",
            commonErrors: ["Multiplying 40 by 5 to get 200 s.", "Using speed as the frequency."],
            examinerNote: "M1 for $f = 1.5 \\div 0.30$ (or 5 Hz seen). M1 for $40 \\div f$ (ecf). A1 for 8 s.",
          },
        },
        {
          id: "esc9-u3-wave-properties-speed-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates water waves in a ripple tank. She counts that 12 waves pass a fixed point in 8.0 s. She then freezes the image and measures the distance across 10 wavelengths as 0.60 m.",
          parts: [
            { label: "a", prompt: "State whether water waves are transverse or longitudinal.", marks: 1 },
            { label: "b", prompt: "Calculate the frequency of the waves, in Hz.", marks: 2 },
            { label: "c", prompt: "Calculate the wavelength of the waves, in metres.", marks: 2 },
            { label: "d", prompt: "Calculate the speed of the waves, in $\\text{m/s}$.", marks: 2 },
            { label: "e", prompt: "Explain why the student measured across 10 wavelengths instead of measuring a single wavelength.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transverse wave", statement: "Oscillations are at right angles to the direction of energy transfer." },
              { kind: "formula", name: "Frequency", statement: "$f = \\frac{\\text{number of waves}}{\\text{time}}$" },
              { kind: "formula", name: "Wave speed equation", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { part: "a", reasoning: "Water waves oscillate up and down at right angles to the direction in which they travel.", working: "\\text{transverse}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Frequency is the number of waves per second.", working: "f = \\frac{12}{8.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "f = 1.5\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the total distance by the number of wavelengths to find one wavelength.", working: "\\lambda = \\frac{0.60}{10}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\lambda = 0.060\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the wave speed equation with the values from (b) and (c).", working: "v = f\\lambda = 1.5 \\times 0.060", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "v = 0.090\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "A single wavelength is small, so a reading error on the ruler is a large fraction of it. Measuring a longer distance reduces the percentage uncertainty.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Dividing the total distance by 10 gives a mean wavelength, which is more accurate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) transverse (b) $1.5\\text{ Hz}$ (c) $0.060\\text{ m}$ (d) $0.090\\text{ m/s}$ (e) a longer measured distance reduces the percentage error in reading the ruler, and dividing gives a mean wavelength.",
            commonErrors: ["Dividing 8.0 by 12 to get 0.67 in (b), which is the period.", "Forgetting to divide 0.60 m by 10 in (c) and using 0.60 m as the wavelength."],
            examinerNote: "In (d) allow ecf from (b) and (c). In (e) accept 'to reduce the uncertainty / error in the measurement' (oe). Reject 'to make it a fair test'.",
          },
        },
      ],
    },
    {
      id: "esc9-u3-sound-light",
      title: "Sound and light: reflection and refraction",
      skill: "Apply the law of reflection, describe refraction, and explain how sound travels and echoes.",
      lesson: {
        sections: [
          {
            heading: "Reflection of light",
            body: "Light reflects from a smooth surface such as a mirror according to the **law of reflection**: the angle of incidence equals the angle of reflection, $i = r$. Both angles are measured between the ray and the **normal**, the line at $90^\\circ$ to the surface. If a ray makes an angle of $30^\\circ$ with the mirror, the angle of incidence is $90^\\circ - 30^\\circ = 60^\\circ$.",
          },
          {
            heading: "Refraction of light",
            body: "When light passes from air into a denser transparent material such as glass or water, it slows down and bends **towards** the normal. When it leaves the material and speeds up again, it bends **away from** the normal. A ray that meets the boundary along the normal slows down but does not change direction. Light travels at about $3.0 \\times 10^8\\text{ m/s}$ in a vacuum.",
          },
          {
            heading: "Sound",
            body: "Sound is a longitudinal wave caused by vibrations. It needs particles to travel through, so it cannot travel through a vacuum. It travels fastest in solids, slower in liquids and slowest in gases: about $340\\text{ m/s}$ in air and about $1500\\text{ m/s}$ in water. An echo is sound reflected from a hard surface. For an echo, the sound travels to the surface and back, so the distance travelled is twice the distance to the surface: $s = vt$ gives the total distance.",
          },
        ],
        keyFormulas: [
          { name: "Law of reflection", statement: "angle of incidence = angle of reflection, both measured from the normal" },
          { name: "Distance travelled by a wave", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
          { name: "Speed of sound (use in questions)", statement: "about $340\\text{ m/s}$ in air, $1500\\text{ m/s}$ in water" },
        ],
        workedExample: {
          problem: "A ship sends a pulse of sound down to the sea bed. The echo returns after 0.20 s. The speed of sound in water is 1500 m/s. Calculate the depth of the water.",
          solution: "Total distance $= vt = 1500 \\times 0.20 = 300\\text{ m}$. The pulse travels down and back, so depth $= 300 \\div 2 = 150\\text{ m}$.",
        },
      },
      questions: [
        {
          id: "esc9-u3-sound-light-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ray of light travels from air into a glass block at an angle to the normal. Which statement describes what happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ray speeds up and bends towards the normal." },
              { id: "b", text: "The ray slows down and bends away from the normal." },
              { id: "c", text: "The ray slows down and bends towards the normal." },
              { id: "d", text: "The ray speeds up and bends away from the normal." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Refraction", statement: "Light slows down and bends towards the normal when it enters a denser medium." },
            ],
            steps: [
              { reasoning: "Glass is denser than air, so light slows down and bends towards the normal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The ray slows down and bends towards the normal.",
            commonErrors: ["Thinking that light speeds up in glass.", "Confusing entering glass with leaving glass."],
            examinerNote: "B1 for (c) only.",
          },
        },
        {
          id: "esc9-u3-sound-light-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ray of light hits a plane mirror. The ray makes an angle of $25^\\circ$ with the surface of the mirror. Calculate the angle of reflection, in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle of reflection", answer: 65, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "Angle of incidence = angle of reflection, both measured from the normal." },
            ],
            steps: [
              { reasoning: "Angles are measured from the normal, which is at $90^\\circ$ to the mirror, so subtract the angle with the surface from $90^\\circ$.", working: "i = 90^\\circ - 25^\\circ = 65^\\circ", marks: 1, markCode: "M" },
              { reasoning: "By the law of reflection the angle of reflection equals the angle of incidence.", working: "r = 65^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^\\circ$",
            commonErrors: ["Giving $25^\\circ$ by measuring the angle from the mirror surface.", "Giving $155^\\circ$ or $115^\\circ$ by subtracting from $180^\\circ$ instead of $90^\\circ$."],
            examinerNote: "M1 for $90 - 25$ (oe). A1 for 65.",
          },
        },
        {
          id: "esc9-u3-sound-light-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "During a storm, a student sees a flash of lightning and hears the thunder 6.0 s later. Light travels at about $3.0 \\times 10^8\\text{ m/s}$ and the speed of sound in air is 340 m/s. Explain why the time taken for the light to reach the student can be ignored, then calculate the distance, in metres, from the student to the lightning.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 2040, tolerance: 1, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed equation", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
            ],
            steps: [
              { reasoning: "Light travels almost a million times faster than sound, so it reaches the student almost instantly. The 6.0 s is the time for the sound alone.", marks: 1, markCode: "B" },
              { reasoning: "Use distance = speed $\\times$ time for the sound.", working: "s = vt = 340 \\times 6.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "s = 2040\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The light arrives almost instantly because it is much faster than sound; distance $= 2040\\text{ m}$ (about 2.0 km).",
            commonErrors: ["Dividing 340 by 6.0 to get 56.7 m.", "Halving the distance, as if the sound had travelled there and back."],
            examinerNote: "B1 for light travelling much faster / time is negligible (oe). M1 for $340 \\times 6.0$. A1 for 2040 m (allow 2000 m or 2.04 km).",
          },
        },
        {
          id: "esc9-u3-sound-light-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ray of light in air meets one face of a rectangular glass block at an angle to the normal. It passes through the block and emerges from the opposite parallel face. Separately, a ship sends a pulse of sound to the sea bed and detects the echo 0.40 s later. The speed of sound in sea water is 1500 m/s.",
          parts: [
            { label: "a", prompt: "State what happens to the speed of the light as it enters the glass.", marks: 1 },
            { label: "b", prompt: "Describe how the direction of the ray changes as it enters the glass and as it leaves the glass.", marks: 2 },
            { label: "c", prompt: "Calculate the depth of the sea water below the ship, in metres.", marks: 3 },
            { label: "d", prompt: "Explain why sound cannot travel through a vacuum.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Refraction", statement: "A wave changes direction when its speed changes at a boundary, bending towards the normal when it slows down and away from the normal when it speeds up." },
              { kind: "formula", name: "Speed equation", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
              { kind: "definition", name: "Sound", statement: "Sound is a longitudinal wave in which vibrations are passed from particle to particle." },
            ],
            steps: [
              { part: "a", reasoning: "Glass is denser than air so light travels more slowly in it.", working: "\\text{decreases / slows down}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "On entering the glass the ray slows down and bends towards the normal.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "On leaving the glass it speeds up and bends away from the normal, so the emerging ray is parallel to the original ray.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The pulse travels to the sea bed and back, so find the total distance first.", working: "s = vt = 1500 \\times 0.40 = 600\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The depth is half of the total distance.", working: "\\text{depth} = \\frac{600}{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "300\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sound is made of vibrations that are passed on from one particle to the next.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A vacuum contains no particles, so there is nothing to carry the vibrations.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) it decreases (b) towards the normal on entering, away from the normal on leaving, emerging parallel to the original ray (c) $300\\text{ m}$ (d) sound needs particles to pass on vibrations and a vacuum has none.",
            commonErrors: ["Giving 600 m in (c) by forgetting that the sound travels down and back.", "Saying the light 'speeds up' in glass.", "Saying sound cannot travel in a vacuum 'because there is no air' without referring to particles or vibrations."],
            examinerNote: "In (b) allow a correct labelled diagram. In (d) accept 'no medium' only if linked to vibrations (oe).",
          },
        },
      ],
    },
  ],
};
